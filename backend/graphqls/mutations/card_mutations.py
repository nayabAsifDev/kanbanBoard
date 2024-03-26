import graphene
from models.card_model import CardModel
from ..schemas.card_schema import CardType
from database.dynamodb_client import get_dynamodb_client
from utils.time import time2graphql

class CreateCard(graphene.Mutation):
    class Arguments:
        id = graphene.String(required=True)
        listId = graphene.String(required=True)
        text = graphene.String(required=True)
        pass

    card = graphene.Field(CardType)

    def mutate(self, info, id, listId, text):
        dynamodb = get_dynamodb_client(local=True)
        table = dynamodb.Table('Cards')
        current_datetime = time2graphql()
        table.put_item(Item={'id': id, 'key': id, 'listId': listId, 'index': 0, 'text': text, 'editMode': False, 'created': current_datetime, 'updated': current_datetime})
        return CreateCard(card=CardModel(id, id, listId, 0, text, False, current_datetime, current_datetime))

