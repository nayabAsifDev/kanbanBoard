import uuid
import graphene
from models.list_model import ListModel
from ..schemas.list_schema import ListType
from database.dynamodb_client import get_dynamodb_client
from utils.time import time2graphql
from datetime import datetime
from boto3.dynamodb.conditions import Attr

class CreateList(graphene.Mutation):
    class Arguments:
        title = graphene.String(required=True)

    list = graphene.Field(ListType)

    def mutate(self, info, title):
        dynamodb = get_dynamodb_client(local=True)
        table = dynamodb.Table('Lists')
        id = title.replace(" ", "-").lower() + '-' + str(uuid.uuid4())
        current_datetime = time2graphql()
        table.put_item(Item={'id': id, 'key': id, 'title': title, 'sort': 'custom', 'created': current_datetime, 'updated': current_datetime})
        return CreateList(list=ListModel(id, id, title, 'custom', current_datetime, current_datetime))

class DeleteList(graphene.Mutation):
    class Arguments:
        id = graphene.String(required=True)

    list = graphene.Boolean()

    def mutate(self, info, id):
        dynamodb = get_dynamodb_client(local=True)
        card_table = dynamodb.Table('Cards')
        list_table = dynamodb.Table('Lists')
        response = card_table.scan(
            FilterExpression=Attr('listId').eq(id)
        )['Items']

        # Extract the keys of the items to delete
        keys_to_delete = [item['id'] for item in response]

        # Delete the items
        for key in keys_to_delete:
            card_table.delete_item(Key={'id': key })

        print(f"All items with listId '{id}' have been deleted.")

        try:
            response = list_table.delete_item(Key={'id': id})
            return DeleteList(list=True)
        except Exception as e:
            print(f"Error deleting item: {e}")
            return DeleteList(list=False)
