# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

ActiveRecord::Base.transaction do
  
# // most dependent thing first
  Review.destroy_all; 
  Business.destroy_all;
  User.destroy_all;

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
      },
      {
        username: "CoffeeGuru",
        first_name: "JT",
        last_name: "Funman",
        email: "JTknowscode@gmail.com",
        zip_code: 98177,
        password:"password"
      },
      {
        username: "FoodieJunkie",
        first_name: "Toby",
        last_name: "Mcquire",
        email: "mediafrenzy@gmail.com",
        zip_code: 98177,
        password:"password"
      }
    ])

 avatarsURL = 
      ["https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/user_avatars/empty_avatar_frame.png",
        "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/user_avatars/adventure-sm.png",
        "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/user_avatars/shilouette-sm.png",
        "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/user_avatars/lepro-sm.png",
        "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/user_avatars/thought-sm.png"
      ]


demoUsers.each do |user|
  p "adding users..."
    url = "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/user_avatars/empty_avatar_frame.png"
    temp_file = open("https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/user_avatars/empty_avatar_frame.png")

    arr = url.split("user_avatars/")

      user.avatar.attach(io: temp_file, filename: arr[1])
end

demoUsers.each_with_index do |user, idx|
    p "adding users"

    url = avatarsURL[idx]
    temp_file = open(url)

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
        address: "14419 Greenwood Ave N",
        city: "Seattle",
        state: "WA",
        zip_code: 98113,
        latitude: 47.73401867760304,
        longitude: -122.35571371908686,
        phone: 2062136748,
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
        address: "11335 Roosevelt Way NE",
        city: "Seattle",
        state: "WA",
        zip_code: 98125,
        latitude: 47.71148316029445 ,
        longitude: -122.31808765534065,
        phone: 2063218567,
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
        address: "518 N 85th St",
        city: "Seattle",
        state: "WA",
        zip_code: 98103,
        latitude: 47.69081242982674 ,
        longitude: -122.35111907861481,
        phone: 2061235678,
        first_class: false,
        website: "www.coldbrewup.com",
        category: 0,
        open_time: 9,
        close_time: 15,
        open_time_sat: 9,
        open_time_sun: 15,
        close_time_sat: 9,
        close_time_sun: 18
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
    business_id: allBiz[2].id,
    user_id: demoUsers[0].id,
    title: "Amazing COLDBREW!!!",
    body: "OMG this coldbrew is so clean and pure! In the beginning you go for cofeee,
    then you realize they have the good stuff. So... you try a lil, then a lil more and then
    you're HOOKED! But the thing is this is the good stuff! triple filtered Coldbrew!!! What's
    better than triple filered?!?!? NOTHING!",
    rating: 5
    },
    {
    business_id: allBiz[1].id,
    user_id: demoUsers[0].id,
    title: "Medium Roast",
    body: "The quality of these beans make for an excellent latte. I stayed and chatted for a while
    only to learn that the owner Esteban has travled the world in search for the perfect bean. He's camped on
    mountaintops just to wait for a coffee bean fruit to sprout. He's nuts about coffee! But he's even
    more nuts about making sure you get the BEST cup of morning...or errr BEST cup of evening
    if you're a programmer like me and don't sleep!",
    rating: 5
    },
    {
    business_id: allBiz[0].id,
    user_id: demoUsers[1].id,
    title: "Coffeetopia coffee warms the heart!",
    body: "I highly recommend all
    coffee lovers go here! The barista does a little dance everytime you say the word
    LATTE. Go there and say LATTE FIVE TIMES! So Funny!",
    rating: 5
    },
    {
    business_id: allBiz[0].id,
    user_id: demoUsers[4].id,
    title: "Cold coffee",
    body: "Meh. Cold Coffee. I went in thinking this place was all the rave. I sure thought it was
    because they have a giant coffee cup outside their building. I was like oh well... this place
    means business! So I got in.... yes it was raining. I order a cup of joe and proceed to go 
    on a walk down the street. I take the lid off, I hear my favorite song and I put my coffee
    down and begin dancing. 10 minutes go by and I notice my coffee overflowing. I take my first sip
    and.... IT WAS COLD! They serve cold coffee there. Just sayin. Or wait....I left my lid off.
    Nah They should have used better hard to remove lids. 2 STARS!!",
    rating: 2
    },
    {
    business_id: allBiz[1].id,
    user_id: demoUsers[2].id,
    title: "JAVA!!!",
    body: "The atmosphere was clean, the smell of fresh coffee was in the air. The Baristas were
    smiling. The merchandise table was well stocked. Even my latte, complete with latte art was Beautiful!!
    So why 3 stars??? Well, the bathroom was messy. Everything matters. I don't wanna step in a pool of coffee
    when I go fix my hair up in the bathroom. I wear Gucci shoes after all. If they update their bathroom
    protocol, then I'll change this to 5 stars",
    rating: 3
    },
    {
    business_id: allBiz[2].id,
    user_id: demoUsers[2].id,
    title: "Strong",
    body: "Wow now this stuff is puckeriffic! I mean nice delicious bitter coldbrew coffee. The kind of
    coldbrew that makes you go WOW! I would honestly go here every day for the organic pastries which
    are made by the local bakery down the street...except, the coffee here isn't 100% organic. Still a nice
    treat and the best coffee on the block, but those chemicals ... gotta keep those out of my system",
    rating: 4
    },
    {
    business_id: allBiz[1].id,
    user_id: demoUsers[1].id,
    title: "New Here",
    body: "I'm still new here. Am I doing this right? I liked this place. I clicked 5 stars.",
    rating: 5
    },
    {
    business_id: allBiz[2].id,
    user_id: demoUsers[3].id,
    title: "Coffeetopia coffee warms the heart!",
    body: "I never knew what coldbrew was before this place showed up. Now I'm hooked! It
    does make you go to the bathroom a lot though. But that's ok! I'm a Janitor and proud of it!",
    rating: 5
    },
    {
    business_id: allBiz[0].id,
    user_id: demoUsers[2].id,
    title: "Coffeetopia sells beer!",
    body: "Haha do this coffee place sells beer!!! Who knew! Now I never have to kick the
    habit! Woo hoo! CoffeeTopia! If they start selling my favorite beer I'll add the last
    star",
    rating: 4
    },
    {
    business_id: allBiz[0].id,
    user_id: demoUsers[4].id,
    title: "Coffeetopia coffee warms the heart!",
    body: "Holy Cow! Where there is Coffeetopia there is ME! I'm so glad this place
    showed up in my neighborhood. I used to have to drive allllllll the way (total of 5 blocks)
    to Drip n' Save just to get my daily coffee. Now I can literaly just walk (total of 1 block)
    to Coffeetopia for great drip! 5 Stars!!!",
    rating: 5
    },
    {
    business_id: allBiz[0].id,
    user_id: demoUsers[3].id,
    title: "Coffeetopia!!!",
    body: "For a nice $2.50 drip, you can't go wrong! I make sure to stop by on Sundays",
    rating: 3
    }
])
  end