# 請以自己的話解釋 API 是什麼
API（Application Programming Interface）中文翻譯為應用程式介面，簡單來說就是一個用來交換資料的方式。用個比喻來說，假設你現在是一間餐廳的顧客，API 就像是服務生，你的 request 就是點餐，廚房則是資料庫；服務生接收到你的 request，透過 API 這個服務生去廚房取得餐點，然後從廚房拿出 Response 給你，也就是你要的餐點。

回到網路的世界，以 Web API 為例，通常公司不可能直接開放資料庫讓你自由進出取得資料，這就像餐廳讓客人亂走廚房一樣，不能這麼亂來，因此會寫 Web API 供別人串接，讓別人有限度的取得他們想要的資料。

以紙條故事為例子，大概像是千千如果想要讓同學知道每日便當菜單，不太可能讓同學自由查看整個營業過程、利潤、每筆交易的資料，而是會有限度的提供資訊，寫出一個便當菜單的 API，這個 API 提供便當菜色及便當價格資訊，同學只要去對這個 API 丟出 Request ，就能得到 Response ，也就是便當菜單的資訊。

# 請找出三個課程沒教的 HTTP status code 並簡單介紹

* 401 Unauthorized：沒有認證，可能要登入或是 Token。

* 502 Bad Gateway：某個伺服器的服務沒有正確的執行。

* 504 Gateway Timeout：網頁發出的 Request 逾時，伺服器上的服務沒有回應。

### 非官方 HTTP status code

* 622 All The Fucks：是一個叫 FOAAS（Fuck Off As A Service）看了說明，簡而言之，就是叫你 Fuck off 的服務（？）

* 735 Fucking IE：去你的 IE

* 739 Fucking Windows：去你的 Windows

# 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

# PabloRestaurantAPI
## Introduction
PabloRestaurantAPI 提供回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳資訊的服務，歡迎使用。


## API Reference

## GET/lists
回傳所有餐廳資料

#### Resource URL
```https://api.pablorestaurant.com/lists```

#### Resource Information

|        |     |
| ---------- | --- |
| Response formats | JSON |
| Requires authentication? | No |

#### Parameters

Name           | Required  | Description | Default Value | Example
--------------|:-----:|:-----:|:----:|------------------------
_limit    | optional | 限制回傳餐廳數量  |     | /lists?_limit=5 |

#### Example Request

```GET https://api.pablorestaurant.com/lists?_limit=5```

#### Example Response

```JSON
[
  {
    "id" : 1,
    "name" : "山頂撈"
  },
  {
    "id" : 2,
    "name" : "玉晶牛排"
  },
  {
    "id" : 3,
    "name" : "石板屋"
  },
  {
    "id" : 4,
    "name" : "教母羊排"
  },
  {
    "id" : 5,
    "name" : "momo hell"
  },
] 
```

## GET/lists/:id
回傳單一餐廳資料

#### Resource URL
```https://api.pablorestaurant.com/lists/:id```

#### Resource Information

|        |     |
| ---------- | --- |
| Response formats | JSON |
| Requires authentication? | No |

#### Parameters

無

#### Example Request

```GET https://api.pablorestaurant.com/lists/5```

#### Example Response

```JSON
{
  "id" : 5,
  "name" : "momo hell"
},
```

## DELETE/lists/:id
刪除餐廳資料

#### Resource URL
```https://api.pablorestaurant.com/lists/:id```

#### Resource Information

|        |     |
| ---------- | --- |
| Response formats | JSON |
| Requires authentication? | Yes |

#### Parameters

無

#### Example Request

```DELETE https://api.pablorestaurant.com/lists/5```

#### Example Response

```204```

## POST/lists
新增餐廳資料

#### Resource URL
```https://api.pablorestaurant.com/lists```

#### Resource Information

|        |     |
| ---------- | --- |
| Response formats | JSON |
| Requires authentication? | Yes |

#### Parameters

Name           | Required  | Description | Default Value | Example
:--------------:|:-----:|:-----:|:----:|------------------------
id | required | 餐廳 id  |     | lists?id=6 |
name | required | 餐廳名稱  |     | list?name="肉少少火鍋" |

#### Example Request

```POST https://api.pablorestaurant.com/lists?id=6&name="肉少少火鍋"```

#### Example Response

```JSON
  {
    "id" : 6,
    "name" : "肉少少火鍋"
  },
```

## PATCH/lists
更改餐廳資料

#### Resource URL
```https://api.pablorestaurant.com/lists```

#### Resource Information

|        |     |
| ---------- | --- |
| Response formats | JSON |
| Requires authentication? | Yes |

#### Parameters

Name           | Required  | Description | Default Value | Example
:--------------:|:-----:|:-----:|:----:|------------------------
id | required | 餐廳 id  |     | lists?id=6 |
name | required | 餐廳名稱  |     | list?name="屋驢燒肉" |

#### Example Request

```PATCH https://api.pablorestaurant.com/lists?id=6&name="屋驢燒肉"```

#### Example Response

```JSON
  {
    "id" : 6,
    "name" : "屋驢燒肉"
  },
```
