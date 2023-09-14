## Create a Person

### Route
http://localhost:5000/api

### An API Endpoint to Create a Person Resource

> This process invokes a method that creates a new person. A 200 status code indicates a successful response. 
  

### Resource Information

|  |  |
| --- | --- |
| Response Formats | JSON |
| Requires authentication? | No |
| Language header | lg; en,ch....etc |

### Request Parameters

None

### Query Parameters

None

### Body Parameters

| Name | Required | Description | Default Value | Example |
| --- | --- | --- | --- | --- |
| Name | Yes | The name of the resource |  | Bode Brook |
| state | Yes | The state of origin of the person |  | Ogun State |
| address | Yes | The address of the person |  | Gasline Ijoko-Ota |
| occupation | Yes | The occupation of the person |  | Backend Developer |
| annualSalary | NO | The annual salary of the person |  | 6000000 |
| monthlySalary | NO | The monthly salary of the person |  | 500000 |

### Example Response

```
{
    "success": true,
    "data": {
        "name": "bodebrook",
        "role": "user",
        "state": "Ogun State",
        "address": "Gasline Ijoko-Ota",
        "occupation": "Backend Developer",
        "annualSalary": "6000000",
        "monthlySalary": "500000",
        "_id": "65033b690b671199c2804bf6",
        "slug": "bodebrook",
        "__v": 0
    },
    "status": 200
}

 ```

 ### Body

 {
    "name": "Bode Brook",
    "state": "Ogun State",
    "address": "Gasline Ijoko-Ota",
    "occupation": "Backend Developer",
    "annualSalary": "6000000",
    "monthlySalary": "500000"
}


## Get Persons

### Route
http://localhost:5000/api

### API Endpoint to Get Persons from the Database
> This process invokes a method that gets all persons in the database.

### Resource Information
|  |  |
| --- | --- |
| Response Formats | JSON |
| Requires authentication? | No |
| Language header | lg; en,ch....etc |

### Query Parameters
None

### Request Parameters 
None

### Body Parameters
None

```
{
    "success": true,
    "count": 7,
    "data": [
        {
            "_id": "65022f877c2527bfb2ac09b8",
            "name": "bolatito",
            "role": "user",
            "state": "Ogun State",
            "address": "Gasline Ijoko-Ota",
            "occupation": "Backend Developer",
            "annualSalary": "6000000",
            "monthlySalary": "500000",
            "slug": "bolatito",
            "__v": 0
        },
        {
            "_id": "6502300e7c2527bfb2ac09bb",
            "name": "Bolade James",
            "role": "user",
            "state": "Ogun State",
            "address": "Gasline Ijoko-Ota",
            "occupation": "Backend Developer",
            "annualSalary": "6000000",
            "monthlySalary": "500000",
            "slug": "bolade-james",
            "__v": 0
        },
        {
            "_id": "650338db87dc1cdcd2fcc86d",
            "name": "bode james",
            "role": "user",
            "state": "Ogun State",
            "address": "Gasline Ijoko-Ota",
            "occupation": "Backend Developer",
            "annualSalary": "6000000",
            "monthlySalary": "500000",
            "slug": "bode-james",
            "__v": 0
        },
        {
            "_id": "65033b2d3d208805fdcce918",
            "name": "bode,grace",
            "role": "user",
            "state": "Ogun State",
            "address": "Gasline Ijoko-Ota",
            "occupation": "Backend Developer",
            "annualSalary": "6000000",
            "monthlySalary": "500000",
            "slug": "bodegrace",
            "__v": 0
        },
        {
            "_id": "65033b4d0b671199c2804bf2",
            "name": "bodegrace",
            "role": "user",
            "state": "Ogun State",
            "address": "Gasline Ijoko-Ota",
            "occupation": "Backend Developer",
            "annualSalary": "6000000",
            "monthlySalary": "500000",
            "slug": "bodegrace",
            "__v": 0
        },
        {
            "_id": "65033b600b671199c2804bf4",
            "name": "bodebrad",
            "role": "user",
            "state": "Ogun State",
            "address": "Gasline Ijoko-Ota",
            "occupation": "Backend Developer",
            "annualSalary": "6000000",
            "monthlySalary": "500000",
            "slug": "bodebrad",
            "__v": 0
        },
        {
            "_id": "65033b690b671199c2804bf6",
            "name": "bodebrook",
            "role": "user",
            "state": "Ogun State",
            "address": "Gasline Ijoko-Ota",
            "occupation": "Backend Developer",
            "annualSalary": "6000000",
            "monthlySalary": "500000",
            "slug": "bodebrook",
            "__v": 0
        }
    ],
    "status": 200
}
```

## Get One Person
### Route
http://localhost:5000/api/65022f877c2527bfb2ac09b8

### API Endpoint for Getting a User

> This process Invokes a method that gets a user from the database 
  

### Resource Information

|  |  |
| --- | --- |
| Response Formats | JSON |
| Requires authentication? | No |
| Language header | lg; en,ch....etc |

### Request Parameters

| Name | Required | Description | Default Value | Example |
| --- | --- | --- | --- | --- |
| user_id | Yes | The user's id to get |  | 65022f877c2527bfb2ac09b8 |

### Query Parameters

None

### Body Parameter

None

### Example Response

```
{
    "success": true,
    "data": {
        "_id": "65022f877c2527bfb2ac09b8",
        "name": "bolatito",
        "role": "user",
        "state": "Ogun State",
        "address": "Gasline Ijoko-Ota",
        "occupation": "Backend Developer",
        "annualSalary": "6000000",
        "monthlySalary": "500000",
        "slug": "bolatito",
        "__v": 0
    },
    "status": 200
}
 ```

 ## Update a Person
 ### Route: 
 http://localhost:5000/api/65022f877c2527bfb2ac09b8

 ### API Endpoint to Update a Person

> This process invokes a method that updates a specific user. 
  

### Resource Information

|  |  |
| --- | --- |
| Response Formats | JSON |
| Requires authentication? | No |
| Language header | lg; en,ch....etc |

### Request Parameters

| Name | Required | Description | Default Value | Example |
| --- | --- | --- | --- | --- |
| user_id | Yes | The user id to update |  | 65022f877c2527bfb2ac09b8 |

### Query Parameter

None

### Body Parameter

None

### Example Response

```
{
    "success": true,
    "data": {
        "_id": "65022f877c2527bfb2ac09b8",
        "name": "bolatito",
        "role": "user",
        "state": "Ogun State",
        "address": "Gasline Ijoko-Ota",
        "occupation": "Backend Developer",
        "annualSalary": "6000000",
        "monthlySalary": "500000",
        "slug": "bolatito",
        "__v": 0
    },
    "status": 200
}
 ```

 ## Delete a Person

### Route
http://localhost:5000/api/6503398480ea6d42863e74ee
### API Endpoint to Update a Person

> This process invokes a method that delete a specific user. 
  

### Resource Information

|  |  |
| --- | --- |
| Response Formats | JSON |
| Requires authentication? | No |
| Language header | lg; en,ch....etc |

### Request Parameters

| Name | Required | Description | Default Value | Example |
| --- | --- | --- | --- | --- |
| user_id | Yes | The user id to delete |  | 65022f877c2527bfb2ac09b8 |

### Query Parameter

None

### Body Parameter

None

### Example Response

```
{
    "success": true,
    "data": {},
    "status": 200
}

 ```