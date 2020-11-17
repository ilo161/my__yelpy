# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Business.destroy_all
Review.destroy_all
# users = User.create([
#     {{
#         username: "GokuSmartPants",
#         first_Name: "Bethany",
#         last_Name: "Smith",
#         email: "garden_pixie@gmail.com",
#         zipCode: "90253-1210"
#       },
#       {
#         "id": 22,
#         "username": "MightyPlant",
#         "firstName": "Jim",
#         "lastName": "Jones",
#         "email": "jimrocks@gmail.com",
#         "zipCode": "32412-2143"
#       }
#     }
# ])
businesses = Business.create([
    {
        id: 101,  
        business_name: "CoffeeTopia",
        address: "1235 Bean St",
        city: "Seattle",
        state: "WA",
        zip_code: 23425,
        first_class: false,
        website: "www.coffeetopia.com",
        category: 3,
        open_time: 5,
        close_time: 19,
        open_time_sat: 5,
        open_time_sun: 5,
        close_time_sat: 6,
        close_time_sun: 6
      },
      {
        id: 102,    
        business_name: "SweatersR'us",
        address: "5321 wooly Ave",
        city: "Seattle",
        state: "WA",
        zip_code: 23425,
        first_class: false,
        website: "www.sweatersrus.com",
        category: 3,
        open_time: 9,
        close_time: 21,
        open_time_sat: 10,
        open_time_sun: 11,
        close_time_sat: 21,
        close_time_sun: 18
      },
      {
        id: 125,  
        business_name: "HydroPlanet",
        address: "5321 waterUP Ave",
        city: "Seattle",
        state: "WA",
        zip_code: 23425,
        first_class: false,
        website: "www.hydroplanet.com",
        category: 2,
        open_time: 9,
        close_time: 15,
        open_time_sat: 9,
        open_time_sun: 15,
        close_time_sat: 9,
        close_time_sun: 15
      }
      ])

reviews = Review.create([
    {
    business_id: 125,
    user_id: 22,
    title: "Amazing WATER!!!",
    body: "OMG this water is so clean and pure",
    rating: 5
    },
    {
    business_id: 101,
    user_id: 11,
    title: "Medium Roast",
    body: "The quality of these beans make for an excellent latte",
    rating: 5
    },
    {
    business_id: 102,
    user_id: 22,
    title: "Sweaters are really warm!",
    body: "These sweaters are high quality",
    rating: 5
    }
    
])