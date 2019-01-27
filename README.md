# Tracking-Your-World

Tracking Your World is a mobile and desktop application that will allow you  to create your own unique profile and then track both your Food and Drinks.Tracking Your World helps you monitor your food intake . Adding to the tracker what you ate on any given day will help you zero in on where in your diet you can make alterations. Tracking Your World can help you track your drinks, by tracking how much and also what type. Using the app will help you keep better tabs on your consumption, as a result will also help you improve day-to-day for consistent steady progress. https://trackingyourworld.herokuapp.com

Test account 
Username: test1
Password:12345

**Screen Shot** 

**Front page** 

<img width="1670" alt="tracking your world front page" src="https://user-images.githubusercontent.com/35941364/51805859-ab60a600-2240-11e9-80a6-e07f555fd9f1.png">

**Login Page**

<img width="1672" alt="tracking your world login page" src="https://user-images.githubusercontent.com/35941364/51805896-25912a80-2241-11e9-8af9-c0620c0c5070.png">

**Tracker Page**

<img width="1667" alt="tracking your world tracker page" src="https://user-images.githubusercontent.com/35941364/51805945-aea86180-2241-11e9-9b27-2dbdcabb6f74.png">

**Tracker Target Page** 

<img width="1671" alt="tracking your world tracker target page" src="https://user-images.githubusercontent.com/35941364/51805957-ced82080-2241-11e9-88da-2e166aabc773.png">

#Technologies Used
Node, Express, JQuery, JavaScript, MongoDB, Mongoose, Mocha, Chai, REST APIs

#Restful API

"info": {
		"_postman_id": "7390576a-68c9-4279-8bf4-45ce2b13a06f",
		"name": "Tracking your world ",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "http://trackingyourworld.herokuapp.com/user/signin",
			"request": {
				"method": "GET", Retrieves tracker
				"header": [
					{
						"key": "user",
						"value": "test1"
					},
					{
						"key": "password",
						"value": "12345"
					}
				],
				"body": {},
				"url": {
					"raw": "http://trackingyourworld.herokuapp.com/trackers",
					"protocol": "http",
					"host": [
						"trackingyourworld",
						"herokuapp",
						"com"
					],
					"path": [
						"trackers"
					]
				}
			},
			"response": []
		},
		{
			"name": "http://trackingyourworld.herokuapp.com/user/signin",
			"request": {
				"method": "POST", Post new tracker 
				"header": [
					{
						"key": "user",
						"value": "test1"
					},
					{
						"key": "password",
						"value": "12345"
					}
				],
				"body": {},
				"url": {
					"raw": "http://trackingyourworld.herokuapp.com/trackers",
					"protocol": "http",
					"host": [
						"trackingyourworld",
						"herokuapp",
						"com"
					],
					"path": [
						"trackers"
					]
				}
			},
			"response": []
		}
	]
}

/put -> Updates tracker target
delete -> delete tracker