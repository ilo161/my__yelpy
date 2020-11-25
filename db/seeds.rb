# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

ActiveRecord::Base.transaction do
  

  User.destroy_all;
  Business.destroy_all;
  Review.destroy_all;

demoUsers = User.create!([
    {
        username: "DemoUser",
        first_name: "Demo",
        last_name: "User",
        email: "demo@user.com",
        zip_code: 98177,
        password:"123456"
        },
    {
        username: "GokuSmartPants",
        first_name: "Bethany",
        last_name: "Smith",
        email: "garden_pixie@gmail.com",
        zip_code: 98177,
        password: "password"
      },
      {
        username: "MightyPlant",
        first_name: "Jim",
        last_name: "Jones",
        email: "jimrocks@gmail.com",
        zip_code: 98177,
        password:"password"
      }
    ])

demoUsers.each do |user|
  p "adding users..."
    url = "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/user_avatars/empty_avatar_frame.png"
    temp_file = open("https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/user_avatars/empty_avatar_frame.png")

    arr = url.split("user_avatars/")

      user.avatar.attach(io: temp_file, filename: arr[1])
end
    # p demoUSer[0]
    # p demoUSer[1]
    



# businesses = Business.create!([
#     {
#         id: 1,
#         business_name: "CoffeeTopia",
#         address: "1235 Bean St",
#         city: "Seattle",
#         state: "WA",
#         zip_code: 98177,
#         first_class: false,
#         website: "www.coffeetopia.com",
#         category: 0,
#         open_time: 5,
#         close_time: 19,
#         open_time_sat: 5,
#         open_time_sun: 5,
#         close_time_sat: 6,
#         close_time_sun: 6
#       },
#       { 
#         id: 2,
#         business_name: "Java Bean",
#         address: "5321 java Ave",
#         city: "Seattle",
#         state: "WA",
#         zip_code: 98177,
#         first_class: false,
#         website: "www.javabeans.com",
#         category: 0,
#         open_time: 9,
#         close_time: 21,
#         open_time_sat: 10,
#         open_time_sun: 11,
#         close_time_sat: 21,
#         close_time_sun: 18
#       },
#       {
#         id: 3,
#         business_name: "Coldbrew Planet",
#         address: "5321 coldbrew Ave",
#         city: "Seattle",
#         state: "WA",
#         zip_code: 98177,
#         first_class: false,
#         website: "www.coldbrewup.com",
#         category: 0,
#         open_time: 9,
#         close_time: 15,
#         open_time_sat: 9,
#         open_time_sun: 15,
#         close_time_sat: 9,
#         close_time_sun: 15
#       }
# ])

coffeePhotosArr = [
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/bar_front_scene_LS.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/beans_carafe_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/birds_eye_make_lattee_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/birds_eye_shop_LS.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/birds_eye_small_talk_LS.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/blue_bottle_trio_LS.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/bright_beans_carafe_LS.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/coffee_drip_pour_over_LS.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/coffee_milk_beaker_LS.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/front_bar_pure_LS.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/hands_espresso_machine_LS.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/hat_man_latte_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/large_latte_machine_LS.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/latte_and_spoon_LS.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/latte_big_splash_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/latte_chocolate_LS.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/le_trio_coffee_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/lobby_coffee_shop_clock_LS.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/lobby_coffee_shop_LS.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/noisey_espresso_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/rancilio_machine_LS.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/small_drip_latte_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/tamper_LS.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/tattoo_latte_art_LS.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/teal_coffee_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/trio_espresso_machine_LS.jpg"
]


biz1 = Business.create!({
        business_name: "CoffeeTopia",
        address: "1235 Bean St",
        city: "Seattle",
        state: "WA",
        zip_code: 98177,
        first_class: false,
        website: "www.coffeetopia.com",
        category: 0,
        open_time: 5,
        close_time: 19,
        open_time_sat: 5,
        open_time_sun: 5,
        close_time_sat: 6,
        close_time_sun: 6
      })

# file = open("https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/bar_front_scene_LS.jpg")

# biz1.photos.attach(io: file, filename:"bar_front_scene_LS.jpg")




biz2 = Business.create!({ 
        business_name: "Java Bean",
        address: "5321 java Ave",
        city: "Seattle",
        state: "WA",
        zip_code: 98177,
        first_class: false,
        website: "www.javabeans.com",
        category: 0,
        open_time: 9,
        close_time: 21,
        open_time_sat: 10,
        open_time_sun: 11,
        close_time_sat: 21,
        close_time_sun: 18
      })

# file2 = open("https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/birds_eye_make_lattee_VT.jpg")

# biz2.photos.attach(io: file2, filename:"birds_eye_make_lattee_VT.jpg")

biz3 = Business.create!({
        business_name: "Coldbrew Planet",
        address: "5321 coldbrew Ave",
        city: "Seattle",
        state: "WA",
        zip_code: 98177,
        first_class: false,
        website: "www.coldbrewup.com",
        category: 0,
        open_time: 9,
        close_time: 15,
        open_time_sat: 9,
        open_time_sun: 15,
        close_time_sat: 9,
        close_time_sun: 15
      })

# file3 = open("https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/beans_carafe_VT.jpg")

# biz3.photos.attach(io: file3, filename:"beans_carafe_VT.jpg")

#attach 5 photos to each business
allBiz = []
allBiz.push(biz1, biz2, biz3)

allBiz.each_with_index do |business, idx|
  startArr = [0,5,10]
  
  count = 0
  
    startArr[idx].step do |num|
      puts "adding urls to business..."
      temp_file = open(coffeePhotosArr[num])

      url = coffeePhotosArr[num]
      arr = url.split("coffee_shops/")

      business.photos.attach(io: temp_file, filename: arr[1])

      count += 1
      break if count == 5
    end
end

# Open File
# file = open('https://my-yelpy-dev.us-west-1.amazonaws.com/<optional_folder_name>/<some_file>.jpg')

#Attach Photo
# demo_user.avatar.attach(io: file, filename: 'some_file.jpg')

# file = open("https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/+rose_latte_VT.jpg")


# biz1.photos.attach(io: file, filename:"bar_front_scene_LS.jpg")
# businesses[0].photos.attach(io: open("https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/bar_front_scene_LS.jpg"), filename:"bar_front_scene_LS.jpg")
# businesses[0].photos.attach(io: file, filename:"bar_front_scene_LS.jpg")

# firstBiz.photos.attach(io: file, filename:"bar_front_scene_LS.jpg")

reviews = Review.create!([
    {
    id: 1,
    business_id: 3,
    user_id: 1,
    title: "Amazing COLDBREW!!!",
    body: "OMG this coldbrew is so clean and pure! In the beginning you go for cofeee,
    then you realize they have the good stuff. So... you try a lil, then a lil more and then
    you're HOOKED! But the thing is this is the good stuff! triple filtered Coldbrew!!! What's
    better than triple filered?!?!? NOTHING!",
    rating: 5
    },
    {
    id: 2,
    business_id: 2,
    user_id: 1,
    title: "Medium Roast",
    body: "The quality of these beans make for an excellent latte. I stayed and chatted for a while
    only to learn that the owner Esteban has travled the world in search for the perfect bean. He's camped on
    mountaintops just to wait for a coffee bean fruit to sprout. He's nuts about coffee! But he's even
    more nuts about making sure you get the BEST cup of morning...or errr BEST cup of evening
    if you're a programmer like me and don't sleep!",
    rating: 5
    },
    {
    id:3,
    business_id: 1,
    user_id: 1,
    title: "Coffeetopia coffee warms the heart!",
    body: "I highly recommend all
    coffee lovers go here! The barista does a little dance everytime you say the word
    LATTE. Go there and say LATTE FIVE TIMES! So Funny!",
    rating: 5
    }
    
])
  end