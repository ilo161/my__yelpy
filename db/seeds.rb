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

mexicanFoodsArr = [
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/ninety_tacos.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/asada_taco_Vt.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/bebida_dos_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/bebida_pop_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/burrito_shrimp_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/cena_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/ceviche_dos_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/ceviche_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/chile_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/chips_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/cilantro_taco_LS.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/elote_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/enchiladas_crisp_LS.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/fish_taco_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/fresh_tortilla_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/guacamole_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/just_avo_LS.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/prepare_tacos_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/street_taco_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/street_tacos_chicken_LS.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/taco_chips_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/taco_fresh_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/taco_shrimp_SQ.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/taco_sliders_LS.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/taco_squeeze_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/tomatillos_LS.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/tostada_VT.jpg",
  "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/mexican_shops/tres_tacos_VT.jpg"
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
        close_time_sat: 11,
        close_time_sun: 18
      })

 
  biz4 = Business.create!({
        business_name: "The Ground",
        address: "1005 E Pike St",
        city: "Seattle",
        state: "WA",
        zip_code: 98122,
        latitude: 47.61441556067354 ,
        longitude: -122.31752371369303,
        phone: 2061222672,
        first_class: false,
        website: "www.theground.com",
        category: 0,
        open_time: 4,
        close_time: 16,
        open_time_sat: 6,
        open_time_sun: 7,
        close_time_sat: 14,
        close_time_sun: 14
      })

  biz5 = Business.create!({
        business_name: "Springton Coffee",
        address: "2407 E Union St Suite B",
        city: "Seattle",
        state: "WA",
        zip_code: 98122,
        latitude: 47.61314262755583,
        longitude: -122.29941343829212,
        phone: 2069831212,
        first_class: false,
        website: "www.springtoncoffee.com",
        category: 0,
        open_time: 4,
        close_time: 18,
        open_time_sat: 6,
        open_time_sun: 6,
        close_time_sat: 16,
        close_time_sun: 15
      })
 
  biz6 = Business.create!({
      business_name: "Tacos Por Favor",
      address: "602 19th Ave E",
      city: "Seattle",
      state: "WA",
      zip_code: 98112,
      latitude: 47.624973258424504,
      longitude: -122.30580782598665,
      phone: 2069835115,
      first_class: false,
      website: "www.tacosporfavor.com",
      category: 1,
      open_time: 11,
      close_time: 23,
      open_time_sat: 11,
      open_time_sun: 12,
      close_time_sat: 23,
      close_time_sun: 21
    })

  biz7 = Business.create!({
      business_name: "Chile Aqui!",
      address: "1467 E Republican St",
      city: "Seattle",
      state: "WA",
      zip_code: 98112,
      latitude: 47.62372950721084,
      longitude: -122.3110005827006,
      phone: 2061315779,
      first_class: false,
      website: "www.chileaqui.com",
      category: 1,
      open_time: 11,
      close_time: 22,
      open_time_sat: 11,
      open_time_sun: 11,
      close_time_sat: 23,
      close_time_sun: 22
    })

  biz8 = Business.create!({
      business_name: "Chachos Restaurant",
      address: "2043 Eastlake Ave E",
      city: "Seattle",
      state: "WA",
      zip_code: 98102,
      latitude: 47.6384501527803,
      longitude: -122.32460474699182,
      phone: 2065315709,
      first_class: false,
      website: "www.chachos.com",
      category: 1,
      open_time: 11,
      close_time: 22,
      open_time_sat: 11,
      open_time_sun: 11,
      close_time_sat: 23,
      close_time_sun: 22
    })

  biz9 = Business.create!({
      business_name: "La Tostada",
      address: "2865 Eastlake Ave E",
      city: "Seattle",
      state: "WA",
      zip_code: 98102,
      latitude: 47.648223064549875,
      longitude: -122.32280230248129,
      phone: 2067139770,
      first_class: false,
      website: "www.latostada.com",
      category: 1,
      open_time: 12,
      close_time: 18,
      open_time_sat: 11,
      open_time_sun: 11,
      close_time_sat: 18,
      close_time_sun: 18
    })

  biz10 = Business.create!({
      business_name: "Super Burrito",
      address: "1605 N 34th St",
      city: "Seattle",
      state: "WA",
      zip_code: 98103,
      latitude: 47.64833870936364,
      longitude: -122.33447527625152,
      phone: 2069892779,
      first_class: false,
      website: "www.thesuperburrito.com",
      category: 1,
      open_time: 12,
      close_time: 18,
      open_time_sat: 11,
      open_time_sun: 11,
      close_time_sat: 18,
      close_time_sun: 18
    })

# file3 = open("https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_shops/beans_carafe_VT.jpg")

# biz3.photos.attach(io: file3, filename:"beans_carafe_VT.jpg")

#attach 5 photos to each business
allBiz = []
allBiz.push(biz1, biz2, biz3, biz4, biz5)

allBiz.each_with_index do |business, idx|
  startArr = [0,5,10,15,20]
  
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

allTacoBiz = [];
allTacoBiz.push(biz6, biz7, biz8, biz9, biz10)

allTacoBiz.each_with_index do |business, idx|
  startArr = [0,5,10,15,20]
  
  count = 0
  
    startArr[idx].step do |num|
      puts "adding urls to taco business..."
      temp_file = open(mexicanFoodsArr[num])

      url = mexicanFoodsArr[num]
      arr = url.split("mexican_shops/")

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
    },
    {
    business_id: allBiz[1].id,
    user_id: demoUsers[4].id,
    title: "JB",
    body: "I first learned about Java from the movie Men In Black and now I can see
    why the aliens are addicted to coffee! This place has very delicious coffee. I wish
    I could go on their coffee field trips to discover all the various types of coffee.
    However, I must dog sit 25 dogs on weekends, so I'll just enjoy my cups here at home
    with them.",
    rating: 5
    },
    {
    business_id: allBiz[1].id,
    user_id: demoUsers[3].id,
    title: "Java so Java",
    body: "I came here thinking one good cup of java would be all I would need to be
    able to understand JAVA the programming language. Turns out, they are not connected.
     I now must drink more of this java in case the rumors were true. The more java 
      you drink the more JAVA you understand. COFFEE darkRoast = new COFFEE lol. The 
      atmosphere here is quiet. A great place to come study and get away from it all.
       This is what makes Seattle so great. There is just coffee everywhere!",
    rating: 5
    },
    {
    business_id: allBiz[2].id,
    user_id: demoUsers[1].id,
    title: "CB!",
    body: "There's a lot of hype around this coldbrew planet so I decided to give it 
    a go. I literally haven't slept in about 42 days! I'm not sure how I'm still able
    to do anything really. Why sleep when there's coldbrew!! Cold brew! Cold Brew
    Cold Brew! I also like the cinnamon glazed rolls here. It's the right amount
    of sweetness to go along with your ... you guessed it, Cold brew!",
    rating: 5
    },
    {
    business_id: allBiz[2].id,
    user_id: demoUsers[4].id,
    title: "CB Planet",
    body: "Coldbrew planet serves cold coffee. I know it's in the name, but what happened
    to good ole regular coffee shops. The ones where you could just go and sit and enjoy 
    the moment over the next 30 minutes with a good hot cup of coffee. Maybe I'm old,
     or maybe i'm old school, but how can you be a coffee shop and not sell hot coffee? 
     That's why I have to give this place 3 stars. This place can not be called a coffee 
     shop.",
    rating: 3
    },
    {
    business_id: allBiz[3].id,
    user_id: demoUsers[3].id,
    title: "TG",
    body: "Hey whaddya know, a new coffee shop popped up in Seattle! The ground does 
    one thing very well. They greet you when you come in. Then instead of giving you 
    exact change, they fill your purse/wallet with ground coffee. This place is so unique. 
    I even find ground coffee in my shoes when I get to my car. This is a coffee lovers 
    paradise. I'm definitely gonna get my partner some ground coffee from The Ground. 
    Heck, for the holidays, I'm gifting everyone ground coffee down their chimneys!",
    rating: 5
    },
    {
    business_id: allBiz[3].id,
    user_id: demoUsers[3].id,
    title: "TG2",
    body: "Had to do another review! So I took about 100 wheel barrels of ground coffee 
    to my garden and guess what came out of the ground!? A coffee plant! I'm so lucky! 
    Anyways, what I came here to say was that I can't get enough of this place. You 
    must visit!!! Go visit now!",
    rating: 5
    },
    {
    business_id: allBiz[3].id,
    user_id: demoUsers[1].id,
    title: "TG3",
    body: "The ground is called the ground because they don't pre-grind coffee here. 
    What that means for us coffee drinkers is that we are getting the best coffee in 
    the world. Fresh! Not Stale. Thank you for taking the time to grind the coffee at 
    the appropriate time Steve. Steve is one of the owners. He must really like his 
    coffee fresh! 5 stars!",
    rating: 5
    },
    {
    business_id: allBiz[3].id,
    user_id: demoUsers[2].id,
    title: "TG4",
    body: "Bought a bag of Columbian dark roast. But when I got home, it was whole 
    bean. This place ought to be called, whole bean ... not the ground. Lies, I 
    tell you, lies!",
    rating: 1
    },
    {
    business_id: allBiz[3].id,
    user_id: demoUsers[4].id,
    title: "TG5",
    body: "I went in for the pastries. Good pastries here. They are fresh and just 
    super delicious. The coffee was so so. Nothing too spectacular. I am the type 
    to put a lot of sugar in my coffee though. So... maybe bad sugar? not sure. Anyways 
    i'll be back for pastries. Friendly staff too",
    rating: 3
    },
    {
    business_id: allBiz[4].id,
    user_id: demoUsers[1].id,
    title: "SC1",
    body: "I'm usually not a low star giver, but this place is never open when they 
    say they are open. I've tried coming here 4 times and, zip, nada, no lights. 
    Guess i'll have to take my business elsewhere.",
    rating: 1
    },
    {
    business_id: allBiz[4].id,
    user_id: demoUsers[2].id,
    title: "SC2",
    body: "The hours online say open, but no one is here. I even tried calling in at 
    various times to see if anyone would pick up. It goes straight to voice mail. I 
    really just want some coffee.",
    rating: 1
    },
    {
    business_id: allBiz[4].id,
    user_id: demoUsers[3].id,
    title: "SC3",
    body: "The lights were off at 6am, but I managed to look through the glass. Low 
    and behold, I saw a mouse, a parrot, and a turtle playing cards on top of the 
    espresso machine. I'm not against animals playing cards, but I'm sure this has to 
    be a health hazzard. What gives? They also weren't even open when they said they 
    would be.",
    rating: 1
    },
    {
    business_id: allBiz[4].id,
    user_id: demoUsers[4].id,
    title: "SC4",
    body: "They were open! I stood in line only to realize their wifi was not working. 
    Why does this matter? Because the barista is a robot and it needs to receive 
    instruction from the tablet at the front. No wifi, no drink. Le sigh. Cool concept, 
    but they have to have fail safes in place for events like these. Using bluetooth, 
    would have been a fine alternative solution for when you can't do a POST request to 
    the robot barista. 1 extra star for trying out a robot barista.",
    rating: 2
    },
    {
    business_id: allBiz[4].id,
    user_id: demoUsers[0].id,
    title: "SC5",
    body: "Beep Boop Beep! I'm a review. Beep Boop Beep. Here is your coffee. lol I 
    wish the robot barista would turn on. Where's the manager? Where is anybody? 
    Beep Boop Beep. Oh well. I'll go down the street where there are real people.",
    rating: 2
    },
    {
    business_id: allTacoBiz[0].id,
    user_id: demoUsers[1].id,
    title: "TPF1",
    body: "I went in for the enchiladas and a margarita. First off, this place has 
    prime time service. I was greeted within 2 minutes and given a free sample of 
    their honeydew aqua fresca. Delicious stuff. They use that giant rock salt for 
    margaritas and that's always a fun texture experience. The enchilads come in pairs 
    of 3, which means you'll be full even without an appetizer. Anyways, I totally 
    recommend Tacos Por Favor.",
    rating: 5
    },
    {
    business_id: allTacoBiz[0].id,
    user_id: demoUsers[2].id,
    title: "TPF2",
    body: "Holy gee wow. Taco Tuesday at .99 cents a taco! I dunno how they make any 
    money because I had 10! and brought 10 friends! This is definitely the spot to grab 
    your taco fix. Except when it's not Taco Tuesday then tacos are 4.99 each and it gets 
    pretty pricey... especially if you need 10 like myself. You've been warned! They 
    also serve complimentary aqua fresca on Friday's and that's always a good treat.",
    rating: 5
    },
    {
    business_id: allTacoBiz[0].id,
    user_id: demoUsers[3].id,
    title: "TPF3",
    body: "Sigh, went in on a Friday and I didn't know it was going to be extremely 
    busy. And I know, Friday is suppossed to be busy, but this was a 2-3 hour wait. 
    They give people in line warm tortillas to calm down the hunger, but I wish they 
    would serve margaritas as well. We ended up leaving after 2.5 hours to go try 
    out Chili Aqui Restaurant",
    rating: 2
    },
    {
    business_id: allTacoBiz[0].id,
    user_id: demoUsers[1].id,
    title: "TPF4",
    body: "Funny thing, I just got out of Spanish class and I thought to myself 
    wouldn't it be funny if I went and practiced my spanish at Tacos Por Favor?! 
    Turns out, the waiters don't speak spanish. There I was saying trying my best 
    Spanish to only receive a look of confusion. Lol. Good food btw! Definitely worth 
    4 stars.",
    rating: 4
    },
    {
    business_id: allTacoBiz[0].id,
    user_id: demoUsers[2].id,
    title: "TPF5",
    body: "This place was soo good, I had to come back every day of the week and 
    spend my entire paycheck! If you don't live for tacos, then what do you live for?",
    rating: 5
    },
    {
    business_id: allTacoBiz[1].id,
    user_id: demoUsers[1].id,
    title: "CAQ1",
    body: "Alright let's be honest. Chili Aqui has the spiciest salsas in town. It 
    really amplifies the flavor of their food. I usually mix their Salsa Alta with 
    their mild Salsa Baja to create something that is truly my own. Go and mix up 
    some salsas!",
    rating: 5
    },
    {
    business_id: allTacoBiz[1].id,
    user_id: demoUsers[3].id,
    title: "CAQ2",
    body: "Do you ever go to a restaurant and wonder how they ever came up with 
    such delicious recipes? Gee Goly, Chile Aqui not only prepares 5 star quality 
    Mexican food but their salsas are TOO GOOD! If you ask nicely they let you take 
    some salsa home. Nice place, very kind.",
    rating: 5
    },
    {
    business_id: allTacoBiz[1].id,
    user_id: demoUsers[2].id,
    title: "CAQ3",
    body: "I'm an international world Spicy Food Eater and I wasn't impressed. The 
    food was OK but I really came for the Spicy. If no spicy, then me not happy. And 
    I am not happy. I travelled 1000 miles to get here. There is no Chile Aqui. 
    Don't be fooled. 3 stars.",
    rating: 3
    },
    {
    business_id: allTacoBiz[1].id,
    user_id: demoUsers[0].id,
    title: "CAQ4",
    body: "Went in for Margaritas with a few friends. It took the bartender about 
    20 minutes before he came to say hello. What more is there to say?",
    rating: 1
    },
    {
    business_id: allTacoBiz[1].id,
    user_id: demoUsers[4].id,
    title: "CAQ5",
    body: "Definitiely go here! But also definitely don't go on a Friday night. 
    Too busy and too hungry to wait. We opted for sushi next door.",
    rating: 2
    },
    {
    business_id: allTacoBiz[2].id,
    user_id: demoUsers[1].id,
    title: "Cha1",
    body: "Chachos has a mariachi band that visits on Saturdays. The band really 
    adds an element of authenticity that no other restaurant has here in Seattle. 
    I definitely make an effort to go every Saturday just to be serenaded. I mean 
    who doesn't like to be serenaded?",
    rating: 5
    },
    {
    business_id: allTacoBiz[2].id,
    user_id: demoUsers[4].id,
    title: "Cha2",
    body: "The Mariachi!!! Wow this place is soo cool. The food isn't the best, 
    but the mariachi makes you feel like you're somewhere in Mexico! I'm writing 
    this review as I sip my patron.",
    rating: 4
    },
    {
    business_id: allTacoBiz[2].id,
    user_id: demoUsers[2].id,
    title: "Cha3",
    body: "Had some so-so ceviche here last night.",
    rating: 3
    },
    {
    business_id: allTacoBiz[2].id,
    user_id: demoUsers[2].id,
    title: "Cha4",
    body: "Decided to give them another try. But this time I had so-so Pollo Adobo. 
    Maybe I just miss my mothers cooking????",
    rating: 3
    },
    {
    business_id: allTacoBiz[2].id,
    user_id: demoUsers[1].id,
    title: "Cha5",
    body: "So there's a magic password here. I shouldn't be posting this here, but 
    if you go to the host desk and say (Aladdin) they will let you sit up top on 
    their private patio. Cool Right?!",
    rating: 5
    },
    {
    business_id: allTacoBiz[3].id,
    user_id: demoUsers[1].id,
    title: "LT1",
    body: "Great place to go for a quick lunch and a great tostada.",
    rating: 5
    },
    {
    business_id: allTacoBiz[3].id,
    user_id: demoUsers[0].id,
    title: "LT2",
    body: "If you like crunchy crunchy tostads topped with seasoned beans, fresh 
    cut lettuce, mouth watering chicken, and the best salsa in town ... then this 
    is the place! Highly recommend. I went here at lunch btw. Friendly service at lunch.",
    rating: 5
    },
    {
    business_id: allTacoBiz[3].id,
    user_id: demoUsers[4].id,
    title: "LT3",
    body: "I ordered their Ultimate Combo Supreme Tostada and boy was it fresh! And 
    I don't mean that in a good way. There was fresh lettuce with the roots still 
    attached. Same with the tomatoes on the vine. Maybe someone was playing a prank on me.
    Hmmmmmm",
    rating: 3
    },
    {
    business_id: allTacoBiz[3].id,
    user_id: demoUsers[4].id,
    title: "LT4",
    body: "HAHA turns out they were playing a prank on me. It was April Fools that day 
    that I went and left my other review. Whoops sorry! I should have known. Ok Here's 
    a real review. Great lunch specials here. I would definitely recommend the 
    Ceviche Del Norte. High quality fresh ingredients.",
    rating: 5
    },
    {
    business_id: allTacoBiz[3].id,
    user_id: demoUsers[2].id,
    title: "LT5",
    body: "Apparently they sold out of all tostadas. I came craving a tostada. Oh well.",
    rating: 2
    },
    {
    business_id: allTacoBiz[4].id,
    user_id: demoUsers[4].id,
    title: "SB1",
    body: "Let me tell you why this place is great. The Super Burrito entree is no 
    joke. It has everything! It's also about the size of your tv which could be SUPER. There is 
    one downside though. The super burrito costs $100 dollars so make sure you bring at 
    least 10 friends to come enjoy this. It's not a bad thing.",
    rating: 5
    },
    {
    business_id: allTacoBiz[4].id,
    user_id: demoUsers[4].id,
    title: "SB2",
    body: "Me again! I decided to take on the Super Burrito Challenge. Where, if you 
    finish the giant 60 inch burrito in 10 minutes or less you get free margaritas 
    for life! Needless to say. I failed, but I just wanted to write and post that 
    someone could win margaritas for life!",
    rating: 5
    },
    {
    business_id: allTacoBiz[4].id,
    user_id: demoUsers[3].id,
    title: "SB3",
    body: "Now the waiter didn't tell me the Super Burrito Entree was $100. I feel 
    jipped, like they knew and they kept it a secret. I mean who can finish a gigantic 
    burrito the size of a table? Not I said Sam. Then you feel bad not leaving a 20% 
    percent tip on $100, so it's just an awkward sale. It was delicious... just 
    unreasonable.",
    rating: 4
    },
    {
    business_id: allTacoBiz[4].id,
    user_id: demoUsers[2].id,
    title: "SB4",
    body: "Went in to try something other than burritos here (since they are huge). 
    I got a classic Shrimp Cocktail. Good ratio of shrimps to sauce. A++",
    rating: 5
    },
    {
    business_id: allTacoBiz[4].id,
    user_id: demoUsers[4].id,
    title: "SB5",
    body: "Went in for the $100 Super Burrito Challenge, except I smuggled in my burrito 
    loving land piranhas and FINISHED THE CHALLENGE in less than 10 minutes! That 
    means I get margaritas for life!!! woo!! There's definitely no signage saying no 
    burrito loving piranhas allowed. So there you go ladies and gentlemen, that's 
    how you win here lol",
    rating: 5
    }
])
  end