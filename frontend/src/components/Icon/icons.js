import React from "react";

const renderIcons = type => {
  switch (type) {
    case "remove":
      return (
        <g fill="currentColor">
          <path
            d="M19.5714286,0.428571429 C19,-0.142857143 18.1428571,-0.142857143 17.5714286,0.428571429 L10,8 L2.42857143,0.428571429 C1.85714286,-0.142857143 1,-0.142857143 0.428571429,0.428571429 C-0.142857143,1 -0.142857143,1.85714286 0.428571429,2.42857143 L8,10 L0.428571429,17.5714286 C-0.142857143,18.1428571 -0.142857143,19 0.428571429,19.5714286 C0.714285714,19.8571429 1,20 1.42857143,20 C1.85714286,20 2.14285714,19.8571429 2.42857143,19.5714286 L10,12 L17.5714286,19.5714286 C17.8571429,19.8571429 18.2857143,20 18.5714286,20 C18.8571429,20 19.2857143,19.8571429 19.5714286,19.5714286 C20.1428571,19 20.1428571,18.1428571 19.5714286,17.5714286 L12,10 L19.5714286,2.42857143 C20.1428571,1.85714286 20.1428571,1 19.5714286,0.428571429 Z"
            id="removeicon"
          />
        </g>
      );

    case "add":
      return (
        <g fill="currentColor">
          <path
            d="M20,10 C20,10.5970149 19.5522388,11.0447761 18.9552239,11.0447761 L11.0447761,11.0447761 L11.0447761,18.9552239 C11.0447761,19.5522388 10.5970149,20 10,20 C9.70149254,20 9.40298507,19.8507463 9.25373134,19.7014925 C9.10447761,19.5522388 8.95522388,19.2537313 8.95522388,18.9552239 L8.95522388,11.0447761 L1.04477612,11.0447761 C0.746268657,11.0447761 0.52238806,10.9701493 0.298507463,10.7462687 C0.0746268657,10.5223881 0,10.2985075 0,10 C0,9.40298507 0.447761194,8.95522388 1.04477612,8.95522388 L8.95522388,8.95522388 L8.95522388,1.04477612 C8.95522388,0.447761194 9.40298507,0 10,0 C10.5970149,0 11.0447761,0.447761194 11.0447761,1.04477612 L11.0447761,8.95522388 L18.9552239,8.95522388 C19.5522388,8.95522388 20,9.40298507 20,10 Z"
            id="addicon"
          />
        </g>
      );

    case "info":
      return (
        <g fill="currentColor">
          <path
            d="M10,0 C4.48504894,0 0,4.48505193 0,10 C0,15.5149605 4.48504894,20 10,20 C15.5149506,20 20,15.5149605 20,10 C20,4.48505193 15.5149506,0 10,0 Z M9.99999995,1.33366928 C14.7943635,1.33366928 18.6663383,5.20564406 18.6663383,9.99999992 C18.6663383,14.7943684 14.7943635,18.6663432 9.99999995,18.6663432 C5.20563577,18.6663432 1.33366137,14.7943684 1.33366137,9.99999992 C1.33366137,5.20564406 5.20563577,1.33366928 9.99999995,1.33366928 Z M9.99015743,2.65741127 C9.8132883,2.66005209 9.64468774,2.73279676 9.52146889,2.8597077 C9.39825004,2.98661864 9.33051331,3.15729281 9.33316921,3.3341606 L9.33316921,9.72440938 L5.52903545,13.5285416 C5.35161082,13.6949867 5.27892619,13.9448557 5.33938678,14.1804994 C5.39984738,14.4161432 5.58385451,14.6001511 5.81949801,14.6606127 C6.05514151,14.7210743 6.30501077,14.6483907 6.47145661,14.4709668 L10.4724409,10.4724409 C10.5973933,10.3470157 10.6673299,10.1770432 10.6668307,9.99999992 L10.6668307,3.3341606 C10.6695392,3.15387894 10.5991172,2.98018617 10.4716245,2.85269332 C10.3441318,2.72520047 10.1704391,2.65477825 9.99015743,2.65741127 Z"
            id="infoicon"
          />
        </g>
      );

    case "dot":
      return (
        <g fill="currentColor">
          <path 
            d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967   C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967   s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967   c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"
            id="doticon"
          />
        </g>
      );

    default: {
      return <g />;
    }
  }
};

export default renderIcons;
