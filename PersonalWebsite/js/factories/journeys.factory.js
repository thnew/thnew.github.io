'use strict';
app.factory('JourneysFactory', function () {
    var journeys = [
        {
            title: "Australia East Coast",
            countries: ["Australia"],
            types: ["ROADTRIP"],
            description: "The Great Barrier Reef, tropical forrests, waterfalls, beaches and animals I never saw before with my own eyes. That's how I could summarize this roadtrip. For 3 weeks we were on the road and explored the east coast. It was the final part of my 6 months journey.",
            start: new Date(2018, 12, 28),
            end: new Date(2019, 1, 27),
            images: [
                {
                    source: "images/travel/journeys/20190128_australia_east_coast/IMG_9300.jpg",
                    description: "Waterfall"
                },
                {
                    source: "images/travel/journeys/20190128_australia_east_coast/IMG_0221.jpg",
                    description: "Kangaroos"
                },
                {
                    source: "images/travel/journeys/20190128_australia_east_coast/IMG_0655.jpg",
                    description: "Sunset"
                },
                {
                    source: "images/travel/journeys/20190128_australia_east_coast/IMG_9153.jpg",
                    description: "Waterfall"
                },
                {
                    source: "images/travel/journeys/20190128_australia_east_coast/IMG_9556.jpg",
                    description: "Koala"
                }
            ]
        },
        {
            title: "New Zealand South Island",
            countries: ["New Zealand"],
            types: ["HIKE", "ROADTRIP"],
            description: "My favorite Island! Most people say they prefer the South Island, though seems like locals prefer the North since way more people live on the North Island. But that's one reason why I prefer the South: Way less people. But the main reason is the overwhelming mountains. Paradise for hiking and taking photos.",
            start: new Date(2018, 11, 17),
            end: new Date(2018, 12, 27),
            images: [
                {
                    source: "images/travel/journeys/20181117_new_zealand_south/IMG_7649.jpg",
                    description: "Roys Peak"
                },
                {
                    source: "images/travel/journeys/20181117_new_zealand_south/IMG_8518.jpg",
                    description: "Routeburn Great Walk"
                },
                {
                    source: "images/travel/journeys/20181117_new_zealand_south/IMG_7753.jpg",
                    description: "Roys Peak"
                },
                {
                    source: "images/travel/journeys/20181117_new_zealand_south/IMG_8447.jpg",
                    description: "Routeburn"
                },
                {
                    source: "images/travel/journeys/20181117_new_zealand_south/IMG_8804.jpg",
                    description: "Routeburn"
                }
            ]
        },
        {
            title: "New Zealand North Island",
            countries: ["New Zealand"],
            types: ["HIKE", "ROADTRIP"],
            description: "Back in New Zealand! I've been here before, in 2014 for 2 months. And this time I had 2 months again, but this time with a car. In 2014 I just finished university and had way less money, so I used the cheapest buses and cheapest hostels. This time I was able to stop by all the places that I missed out, cause last time I was bound to the busses.",
            start: new Date(2018, 11, 6),
            end: new Date(2018, 11, 16),
            images: [
                {
                    source: "images/travel/journeys/20181106_new_zealand_north/IMG_4435.jpg",
                    description: "Wai-O-Tapu"
                },
                {
                    source: "images/travel/journeys/20181106_new_zealand_north/IMG_4702.jpg",
                    description: "Mt Taranaki"
                },
                {
                    source: "images/travel/journeys/20181106_new_zealand_north/IMG_4561.jpg",
                    description: "Tongario Northern Circuit"
                },
                {
                    source: "images/travel/journeys/20181106_new_zealand_north/IMG_4591.jpg",
                    description: "Mt Doom and Tama Lakes"
                },
                {
                    source: "images/travel/journeys/20181106_new_zealand_north/IMG_4730.jpg",
                    description: "Mt Taranaki at sunrise"
                }
            ]
        },
        {
            title: "Fiji",
            countries: ["Fiji"],
            types: ["CHILL"],
            description: "On my way from Hawaii to New Zealand I decided to take some stopover days in Fiji. I spent maybe a week over there in a cute hostel. Didn't do too much there. One day I went hiking with locals and it's quiet hard cause it's slippery as fuck in their forrests.",
            start: new Date(2018, 11, 1),
            end: new Date(2018, 11, 5),
            images: [
                {
                    source: "images/travel/journeys/20181031_fiji/IMG_4161.jpg",
                    description: "Eating with locals"
                }
            ]
        },
        {
            title: "Samoa",
            countries: ["Samoa"],
            types: ["ROADTRIP"],
            description: "One day in Samoa I was going to a public swimming hole and relaxed in a fale (basically a tiny roof where you can hang out below). A family joined me under this fale and started giving me a whole lunch with rice chicken veggies and a drink. Never had such a welcoming experience and even so unexpected :)",
            start: new Date(2018, 10, 27),
            end: new Date(2018, 10, 31),
            images: [
                {
                    source: "images/travel/journeys/20181026_samoa/IMG_4020.jpg",
                    description: "To-Sua Ocean Trench"
                }
            ]
        },
        {
            title: "Two weeks on Oahu",
            countries: ["USA"],
            types: ["ROADTRIP", "HIKE"],
            description: "My all time favorite place on the world! On Oahu you can have eveything, beaches, snorkeling, crazy underwater world and least people know: Magnificent hikes! On that trip I learned a new word: Scrambling. It's basically hiking, but you need your hands as well cause you have to climb certain parts. Many people consider hiking as something boring, but on Oahu everyone would change their mind since those trails are quiet demanding.",
            start: new Date(2018, 10, 14),
            end: new Date(2018, 10, 26),
            images: [
                {
                    source: "images/travel/journeys/20181014_hawaii_oahu/GPTempDownload.jpg",
                    description: "Pali Notches"
                },
                {
                    source: "images/travel/journeys/20181014_hawaii_oahu/IMG_2647.jpg",
                    description: "Snorkeling"
                },
                {
                    source: "images/travel/journeys/20181014_hawaii_oahu/IMG_3107.jpg",
                    description: "Olomana"
                },
                {
                    source: "images/travel/journeys/20181014_hawaii_oahu/IMG_3283.jpg",
                    description: "Pali Notches"
                },
                {
                    source: "images/travel/journeys/20181014_hawaii_oahu/IMG_3769.jpg",
                    description: "Koko Head"
                },
            ]
        },
        {
            title: "My week on Kauai",
            countries: ["USA"],
            types: ["ROADTRIP", "HIKE"],
            description: "What a feeling to be back on Hawaii. It was my second time and my first time on Kauai. The last time I#ve been to Hawaii, I didn't have enough time for Kauai and wanted to see the other islands. But I knew I missed out a great island. My main target this time was the Na Pali coast trail: A gorgeous 5-day hiking trail along wild coasts and beaches. Some people say it has a spiritual energy. For my bad I couldn't do the trail, it was closed due to flooding damages! That really disappointed me, but instead I had more time to explore the rest of the island.",
            start: new Date(2018, 10, 8),
            end: new Date(2018, 10, 13),
            images: [
                {
                    source: "images/travel/journeys/20181007_hawaii_kauai/IMG_1842.jpg",
                    description: "Na Pali Coast"
                },
                {
                    source: "images/travel/journeys/20181007_hawaii_kauai/IMG_2532.jpg",
                    description: "Awa Awapuhi Trail"
                },
                {
                    source: "images/travel/journeys/20181007_hawaii_kauai/IMG_3566.jpg",
                    description: "Kalalau Trail"
                },
            ]
        },
        {
            title: "USA west coast roadtrip",
            countries: ["USA"],
            types: ["ROADTRIP", "HIKE"],
            description: "Maybe the trip that I dreamed of for the longest time. A great roadtrip along the westcoast. My itenary started in Seattle, going down to Redwood, San Francisco, Yellowstone, Grand Canyon, Vegas and ending in LA. And it was indeed the best holiday I had yet. Although I felt like there were way too many tourists at all spots and on the roads, the coast and the rockies had enough to offer to please me!",
            start: new Date(2018, 9, 7),
            end: new Date(2018, 10, 7),
            images: [
                {
                    source: "images/travel/journeys/20180907_usa_rockies/IMG_0448.jpg",
                    description: "Grand Canyon hike"
                },
                {
                    source: "images/travel/journeys/20180907_usa_rockies/IMG_1829.jpg",
                    description: "Some hills at the west coast"
                },
                {
                    source: "images/travel/journeys/20180907_usa_rockies/IMG_1976.jpg",
                    description: "The most beautiful sunset I've ever seen"
                },
                {
                    source: "images/travel/journeys/20180907_usa_rockies/IMG_2162.jpg",
                    description: "Hot pools somewhere between Redwood and Yellowstone"
                },
                {
                    source: "images/travel/journeys/20180907_usa_rockies/IMG_1139.jpg",
                    description: "Helicopter ride over Grand Canyon"
                },
            ]
        },
        {
            title: "Vancouver island",
            countries: ["Canada"],
            types: ["ROADTRIP", "HIKE"],
            description: "What led me to Vancouver Island? I saw a photo of the West coast trail in a German magazine and knew I have to do that trail. The trail took 7 exhausting days, but I ended up hiking an roadtripping for two weeks in total on Vancouver Island.",
            start: new Date(2018, 8, 23),
            end: new Date(2018, 9, 6),
            images: [
                {
                    source: "images/travel/journeys/20180823_canada_vancouver_island/IMG_8534.jpg",
                    description: "West Coast Trail"
                },
                {
                    source: "images/travel/journeys/20180823_canada_vancouver_island/IMG_0587.jpg",
                    description: "That place is literally called hole in the wall"
                },
                {
                    source: "images/travel/journeys/20180823_canada_vancouver_island/IMG_0784.jpg",
                    description: "Hanging out a sunset time"
                },
                {
                    source: "images/travel/journeys/20180823_canada_vancouver_island/IMG_9007.jpg",
                    description: "West Coast Trail"
                },
                {
                    source: "images/travel/journeys/20180823_canada_vancouver_island/IMG_9949.jpg",
                    description: "West Coast Trail"
                },
            ]
        },
        {
            title: "Canadian Rockies",
            countries: ["Canada"],
            types: ["ROADTRIP", "HIKE"],
            start: new Date(2018, 8, 11),
            end: new Date(2018, 8, 22),
            description: "Two weeks on the road through the Canadian rockies. For someone who wants to explore the nature a lot this is paradise and at the same time I realized, that two weeks is way too less time.",
            images: [
                {
                    source: "images/travel/journeys/20180811_canada_rockies/IMG_8140.jpg",
                    description: "Lake Moraine"
                },
                {
                    source: "images/travel/journeys/20180811_canada_rockies/IMG_8064.jpg",
                    description: "The beauty of foggy forrests"
                },
                {
                    source: "images/travel/journeys/20180811_canada_rockies/IMG_7993.jpg",
                    description: "Lake close to  Banff"
                }
            ]
        },
        {
            title: "Niagra Falls and Toronto",
            countries: ["Canada"],
            types: ["SIGHTSEEING"],
            description: "On my way to the rockies, I took a stopover to see the Niagra Falls. Although they were quiet impressing, I was kinda disappointed by all the stuff they built for the tourists. It was literally like a theme park with hundreds of colorful lights shining how you would expect it in Vegas, but not at a natural wonder.",
            start: new Date(2018, 8, 6),
            end: new Date(2018, 8, 10),
            images: [
                {
                    source: "images/travel/journeys/20180805_canada_niagara_toronto/IMG_7571.jpg",
                    description: "Niagra Falls"
                },
                {
                    source: "images/travel/journeys/20180805_canada_niagara_toronto/IMG_7955.jpg",
                    description: "Toronto Skyline"
                }
            ]
        },
        {
            title: "Iceland Westfjords",
            countries: ["Iceland"],
            types: ["HIKE"],
            description: "This was my second time to Iceland. After exploring the main spots of Iceland, I decided to explore the Westfjords this time, including a 3-day hikegoing over a mountain. I was so lucky with the weather. Yes we had some rain sometimes. But according to what locals say, Hornstrandir has a lot of heavy rain at that time of the year. So I was happy to see this remote and beautiful place.",
            start: new Date(2018, 7, 31),
            end: new Date(2018, 8, 5),
            images: [
                {
                    source: "images/travel/journeys/20180731_iceland_westfjords/IMG_7237.jpg",
                    description: "Hiking at Hornstrandir"
                },
                {
                    source: "images/travel/journeys/20180731_iceland_westfjords/IMG_7226.jpg",
                    description: "Ferry to Hornstrandir"
                },
                {
                    source: "images/travel/journeys/20180731_iceland_westfjords/IMG_7267.jpg",
                    description: "My tiny tent setup"
                },
                {
                    source: "images/travel/journeys/20180731_iceland_westfjords/IMG_7426.jpg",
                    description: "Amazing sunset"
                },
                {
                    source: "images/travel/journeys/20180731_iceland_westfjords/IMG_7495.jpg",
                    description: "Dynjandi waterfall"
                }
            ]
        },
        {
            title: "Isle of Skye weekend trip, Scotland",
            countries: ["Great Britain"],
            types: ["HIKE", "ROADTRIP"],
            description: "Weird weekend trip. Rainy, but all scenic. My knees hurted, but had one of my most beautiful hikes. I was tired all time, but still amazed by the scenic mountains. This was a weekend that pushed me to some limits. The best memory I have is of this one sunrise that I had on my way from Edinburgh to the Isle of Skye. I hiked up in the middle of the night and it was freaking windy and cold up there. But I was rewarded with the most beautiful sunrise I had yet. And the sky was firered for freaking 2 hours.",
            start: new Date(2018, 6, 21),
            end: new Date(2018, 6, 24),
            images: [
                {
                    source: "images/travel/journeys/20180621_scotland/IMG_6759.jpg",
                    description: "Sunrise at Glen Coe"
                }
            ]
        },
        {
            title: "Kuala Lumpur",
            countries: ["Malaysia"],
            types: ["SIGHTSEEING"],
            description: "We were here for 5 days to see some cultural places, monkeys and of course to enjoy malaysian food! Our itenary led us through some big malls as well as to impressing places like the Batu caves.",
            start: new Date(2018, 4, 1),
            end: new Date(2018, 4, 7),
            images: [
                {
                    source: "images/travel/journeys/20180331_malaysia_kuala_lumpur/LRG_DSC00756.jpg",
                    description: "Batu Caves"
                },
                {
                    source: "images/travel/journeys/20180331_malaysia_kuala_lumpur/b274d066-4639-4fe5-bc6c-42f1cbe14e2e.jpg",
                    description: "Sunset"
                },
                {
                    source: "images/travel/journeys/20180331_malaysia_kuala_lumpur/LRG_DSC00693.jpg",
                    description: "CBD"
                },
                {
                    source: "images/travel/journeys/20180331_malaysia_kuala_lumpur/LRG_DSC00901.jpg",
                    description: "CBD"
                }
            ]
        },
        {
            title: "Singapore",
            countries: ["Singapore"],
            types: ["SIGHTSEEING"],
            description: "Singapore, the place where Asian culture and Western culture mix together and show up in form of impressing skyscrapers and yummy food courts.",
            start: new Date(2018, 3, 26),
            end: new Date(2018, 3, 31),
            images: [
                {
                    source: "images/travel/journeys/20180327_singapore/LRG_DSC00655.jpg",
                    description: "Gardens by the Bay"
                },
                {
                    source: "images/travel/journeys/20180327_singapore/LRG_DSC00630.jpg",
                    description: "Cloud Forest"
                },
                {
                    source: "images/travel/journeys/20180327_singapore/LRG_DSC00592.jpg",
                    description: "Gardens by the Bay"
                }
            ]
        },
        {
            title: "Mallorca weekend trip",
            countries: ["Spain"],
            types: ["ROADTRIP"],
            description: "Apart from the Ballermann, Mallorca has really nice nature and mountains to offer. We were flying there for a weekend, took a cheap car and drove around that nice island. Although it was January and in Germany it was quiet cold at that time, we had around cozy 10 to 16 degrees here.",
            start: new Date(2018, 1, 19),
            end: new Date(2018, 1, 22),
            images: [
                {
                    source: "images/travel/journeys/20180119_spain_mallorca/LRG_DSC00227.jpg",
                    description: "West coast"
                },
                {
                    source: "images/travel/journeys/20180119_spain_mallorca/IMG_3476.jpg",
                    description: "Lighthouse at west coast"
                },
                {
                    source: "images/travel/journeys/20180119_spain_mallorca/IMG_2890.jpg",
                    description: "Sunset"
                }
            ]
        },
        {
            title: "London weekend trip",
            countries: ["Great Britain"],
            types: ["SIGHTSEEING"],
            description: "Oh we loved it here! Finally seeing all the places that we saw a thousand times on TV, seeing the Queens guards and enjoying a lot of nice food! First we were disappointed when we accidentally booked our hotel at Crystal palace, a place we thought it's right in the city. But turned out Crystal palace is about one hour away from the city, but we liked it. We had a quiet place for the evenings and during the day we were walking all day long in the crowded city.",
            start: new Date(2017, 11, 24),
            end: new Date(2017, 11, 27),
            images: [
                {
                    source: "images/travel/journeys/20171124_london/IMG_1935.jpg",
                    description: "Sunset seen from London eye"
                },
                {
                    source: "images/travel/journeys/20171124_london/IMG_1942.jpg",
                    description: "A carousel"
                }
            ]
        },
        {
            title: "Tuscany Roadtrip",
            countries: ["Italy"],
            types: ["ROADTRIP"],
            description: "",
            start: new Date(2017, 9, 27),
            end: new Date(2017, 10, 8),
            images: [
                {
                    source: "images/travel/journeys/20170927_italy_tuscany/IMG_0695.jpg",
                    description: "Garda lake"
                },
                {
                    source: "images/travel/journeys/20170927_italy_tuscany/IMG_0668.jpg",
                    description: "Garda lake"
                },
                {
                    source: "images/travel/journeys/20170927_italy_tuscany/IMG_1012.jpg",
                    description: "Manarola"
                },
                {
                    source: "images/travel/journeys/20170927_italy_tuscany/IMG_1132.jpg",
                    description: "Castle at the sea"
                }
            ]
        },
        {
            title: "Sweden hiking trip",
            countries: ["Sweden"],
            types: ["HIKE"],
            description: "",
            start: new Date(2017, 8, 16),
            end: new Date(2017, 8, 20),
            images: [
                {
                    source: "images/travel/journeys/20170816_sweden/IMG_9759.jpg",
                    description: "Packing"
                },
                {
                    source: "images/travel/journeys/20170816_sweden/IMG_7964.jpg",
                    description: "Stargazing"
                },
                {
                    source: "images/travel/journeys/20170816_sweden/IMG_9837.jpg",
                    description: "Cooking"
                },
                {
                    source: "images/travel/journeys/20170816_sweden/IMG_9924.jpg",
                    description: "Sunset"
                }
            ]
        },
        {
            title: "Croatia roadtrip",
            countries: ["Croatia"],
            types: ["ROADTRIP"],
            description: "",
            start: new Date(2017, 5, 25),
            end: new Date(2017, 6, 6),
            images: [
                {
                    source: "images/travel/journeys/20170525_croatia/IMG_7814.jpg",
                    description: "Plitvic"
                },
                {
                    source: "images/travel/journeys/20170525_croatia/IMG_7532.jpg",
                    description: "Zagreb"
                },
                {
                    source: "images/travel/journeys/20170525_croatia/IMG_8321.jpg",
                    description: "Dubrovnic"
                },
                {
                    source: "images/travel/journeys/20170525_croatia/IMG_8354.jpg",
                    description: "Sunset"
                }
            ]
        },
        {
            title: "Dolomites Weekendtrip",
            countries: ["Italy"],
            types: ["ROADTRIP"],
            description: "",
            start: new Date(2017, 5, 12),
            end: new Date(2017, 5, 15),
            images: [
                {
                    source: "images/travel/journeys/20170512_italy_dolomites/IMG_7345.jpg",
                    description: "Sunset views"
                },
                {
                    source: "images/travel/journeys/20170512_italy_dolomites/IMG_7248.jpg",
                    description: "Up in the snow zone"
                },
                {
                    source: "images/travel/journeys/20170512_italy_dolomites/IMG_7265.jpg",
                    description: "Lake"
                },
                {
                    source: "images/travel/journeys/20170512_italy_dolomites/IMG_7368.jpg",
                    description: "View from 'Dreizinnen'"
                }
            ]
        },
        {
            title: "Cologne Weekendtrip",
            countries: ["Germany"],
            types: ["SIGHTSEEING"],
            description: "",
            start: new Date(2017, 1, 7),
            end: new Date(2017, 1, 8),
            images: [
                {
                    source: "images/travel/journeys/20170106_germany_cologne/IMG_5436.jpg",
                    description: "Cologne Dom"
                }
            ]
        },
        {
            title: "Barcelona Weekendtrip",
            countries: ["Spain"],
            types: ["SIGHTSEEING"],
            description: "",
            start: new Date(2016, 12, 17),
            end: new Date(2016, 12, 18),
            images: [
                {
                    source: "images/travel/journeys/20161217_spain_barcelona/IMG_4368.jpg",
                    description: "Church"
                },
                {
                    source: "images/travel/journeys/20161217_spain_barcelona/IMG_4394.jpg",
                    description: "Tapas"
                }
            ]
        },
        {
            title: "Budapest Weekendtrip",
            countries: ["Hungary"],
            types: ["SIGHTSEEING"],
            description: "",
            start: new Date(2016, 12, 9),
            end: new Date(2016, 12, 11),
            images: [
                {
                    source: "images/travel/journeys/20161209_hungary_budapest/IMG_4189.jpg",
                    description: "Sunrise view over the river"
                },
                {
                    source: "images/travel/journeys/20161209_hungary_budapest/IMG_4142.jpg",
                    description: "A rare picture of me taking photos"
                },
                {
                    source: "images/travel/journeys/20161209_hungary_budapest/IMG_4192.jpg",
                    description: "Sunrise"
                },
                {
                    source: "images/travel/journeys/20161209_hungary_budapest/IMG_4223.jpg",
                    description: "Me in the sunrise"
                },
                {
                    source: "images/travel/journeys/20161209_hungary_budapest/IMG_4225.jpg",
                    description: "My travel crew"
                }
            ]
        },
        {
            title: "Gran Canaria",
            countries: ["Spain"],
            types: ["ROADTRIP"],
            description: "",
            start: new Date(2016, 11, 19),
            end: new Date(2016, 11, 27),
            images: [
                {
                    source: "images/travel/journeys/20161119_spain_gran_canaria/IMG_3228.jpg",
                    description: "Sunset"
                },
                {
                    source: "images/travel/journeys/20161119_spain_gran_canaria/IMG_2887.jpg",
                    description: "Maspalomas"
                },
                {
                    source: "images/travel/journeys/20161119_spain_gran_canaria/IMG_3623.jpg",
                    description: "Hiking in the inland"
                }
            ]
        },
        {
            title: "Rügen daytrip",
            countries: ["Germany"],
            types: ["HIKE"],
            description: "",
            start: new Date(2016, 10, 16),
            end: new Date(2016, 10, 16),
            images: [
                {
                    source: "images/travel/journeys/20161016_germany_ruegen/IMG_1092.jpg",
                    description: "Wild sea"
                },
                {
                    source: "images/travel/journeys/20161016_germany_ruegen/IMG_1237.jpg",
                    description: "Coastline"
                },
                {
                    source: "images/travel/journeys/20161016_germany_ruegen/IMG_1258.jpg",
                    description: "Coastline"
                },
                {
                    source: "images/travel/journeys/20161016_germany_ruegen/IMG_1279.jpg",
                    description: "The woods"
                }
            ]
        },
        {
            title: "Paris weekendtrip",
            countries: ["France"],
            types: ["SIGHTSEEING"],
            description: "",
            start: new Date(2016, 8, 13),
            end: new Date(2016, 8, 14),
            images: [
                {
                    source: "images/travel/journeys/20160813_france_paris/IMG_2189.jpg",
                    description: "Eiffeltower at sunset"
                }
            ]
        },
        {
            title: "Iceland ring road",
            countries: ["Iceland"],
            types: ["ROADTRIP", "HIKE"],
            description: "",
            start: new Date(2016, 6, 24),
            end: new Date(2016, 7, 3),
            images: [
                {
                    source: "images/travel/journeys/20160624_iceland/IMG_3453.jpg",
                    description: "Selfoss"
                },
                {
                    source: "images/travel/journeys/20160624_iceland/IMG_2267.jpg",
                    description: "Blue lagoon"
                },
                {
                    source: "images/travel/journeys/20160624_iceland/IMG_2420.jpg",
                    description: "Very close to waterfall"
                },
                {
                    source: "images/travel/journeys/20160624_iceland/IMG_2821.jpg",
                    description: "Dettifoss"
                },
                {
                    source: "images/travel/journeys/20160624_iceland/IMG_2893.jpg",
                    description: "Iceland mountains have theit own shape"
                },
            ]
        },
        {
            title: "Geneva weekendtrip",
            countries: ["France"],
            types: ["SIGHTSEEING"],
            description: "",
            start: new Date(2016, 5, 15),
            end: new Date(2016, 5, 15),
            images: [
                {
                    source: "images/travel/journeys/20160514_switzerlnad_geneva/IMG_0241.jpg",
                    description: "Rivers merge"
                },
                {
                    source: "images/travel/journeys/20160514_switzerlnad_geneva/IMG_0250.jpg",
                    description: "Rivers merge"
                }
            ]
        },
        {
            title: "Haut Jura weekendtrip",
            countries: ["France"],
            types: ["HIKE"],
            description: "",
            start: new Date(2016, 5, 14),
            end: new Date(2016, 5, 14),
            images: [
                {
                    source: "images/travel/journeys/20160514_france_haut_jura/IMG_1708.jpg",
                    description: "Dinner view"
                }
            ]
        },
        {
            title: "Japan at Sakura time",
            countries: ["Japan"],
            types: ["SIGHTSEEING"],
            description: "",
            start: new Date(2016, 4, 2),
            end: new Date(2016, 4, 17),
            images: [
                {
                    source: "images/travel/journeys/20160401_japan/IMG_7884.jpg",
                    description: "Kyoto temple"
                },
                {
                    source: "images/travel/journeys/20160401_japan/IMG_6345.jpg",
                    description: "Mystic forrest"
                },
                {
                    source: "images/travel/journeys/20160401_japan/IMG_6345.jpg",
                    description: "Temple close to Mt Fuji"
                },
                {
                    source: "images/travel/journeys/20160401_japan/IMG_7934.jpg",
                    description: "Kyoto sunset view"
                },
                {
                    source: "images/travel/journeys/20160401_japan/IMG_8046.jpg",
                    description: "Osaka castle"
                }
            ]
        },
        {
            title: "Black forrest daytrip",
            countries: ["Germany"],
            types: ["HIKE"],
            description: "",
            start: new Date(2016, 3, 6),
            end: new Date(2016, 3, 6),
            images: [
                {
                    source: "images/travel/journeys/20160306_germany_black_forrest/IMG_4721.jpg",
                    description: "Snowy road"
                },
                {
                    source: "images/travel/journeys/20160306_germany_black_forrest/IMG_4742.jpg",
                    description: "Gondola view"
                }
            ]
        },
        {
            title: "Saxony Switzerland daytrip",
            countries: ["Germany"],
            types: ["HIKE"],
            description: "",
            start: new Date(2016, 3, 5),
            end: new Date(2016, 3, 5),
            images: [
                {
                    source: "images/travel/journeys/20160305_germnay_saxony_switzerland/IMG_4695.jpg",
                    description: "Castle bridge"
                },
                {
                    source: "images/travel/journeys/20160305_germnay_saxony_switzerland/IMG_4586.jpg",
                    description: "Walk"
                }
            ]
        },
        {
            title: "Lisbon weekendtrip",
            countries: ["Portugal"],
            types: ["SIGHTSEEING"],
            description: "",
            start: new Date(2016, 1, 15),
            end: new Date(2016, 1, 17),
            images: [
                {
                    source: "images/travel/journeys/20160115_portugal_lisbon/IMG_3918.jpg",
                    description: "Lisbon streets"
                },
                {
                    source: "images/travel/journeys/20160115_portugal_lisbon/IMG_3767.jpg",
                    description: "Colorful Lisbon"
                },
                {
                    source: "images/travel/journeys/20160115_portugal_lisbon/IMG_3892.jpg",
                    description: "Lisbon Night views"
                },
                {
                    source: "images/travel/journeys/20160115_portugal_lisbon/IMG_3917.jpg",
                    description: "Tiny walkways"
                }
            ]
        },
        {
            title: "Berlin weekendtrip",
            countries: ["Germany"],
            types: ["SIGHTSEEING"],
            description: "",
            start: new Date(2015, 11, 27),
            end: new Date(2015, 11, 29),
            images: []
        },
        {
            title: "Hawaii",
            countries: ["USA"],
            types: ["ROADTRIP"],
            description: "",
            start: new Date(2015, 10, 14),
            end: new Date(2015, 10, 28),
            images: []
        },
        {
            title: "Amsterdam",
            countries: ["Netherlands"],
            types: ["SIGHTSEEING"],
            description: "",
            start: new Date(2015, 10, 12),
            end: new Date(2015, 10, 13),
            images: []
        },
        {
            title: "Malaysia Backpacking",
            countries: ["Malaysia"],
            types: ["SIGHTSEEING"],
            description: "",
            start: new Date(2015, 1, 2),
            end: new Date(2015, 1, 13),
            images: []
        },
        {
            title: "Singapore",
            countries: ["Singapore"],
            types: ["SIGHTSEEING"],
            description: "",
            start: new Date(2014, 12, 26),
            end: new Date(2014, 1, 1),
            images: []
        },
        {
            title: "Phuket",
            countries: ["Thailand"],
            types: ["SIGHTSEEING"],
            description: "",
            start: new Date(2014, 12, 21),
            end: new Date(2014, 12, 25),
            images: []
        },
        {
            title: "Penang",
            countries: ["Malaysia"],
            types: ["SIGHTSEEING"],
            description: "",
            start: new Date(2014, 12, 16),
            end: new Date(2014, 12, 20),
            images: []
        },
        {
            title: "Sydney",
            countries: ["Australia"],
            types: ["SIGHTSEEING"],
            description: "",
            start: new Date(2014, 12, 12),
            end: new Date(2014, 12, 15),
            images: []
        },
        {
            title: "New Zealand Backpacking",
            countries: ["New Zealand"],
            types: ["SIGHTSEEING", "HIKE"],
            description: "",
            start: new Date(2014, 10, 8),
            end: new Date(2014, 12, 11),
            images: []
        },
        {
            title: "Ireland",
            countries: ["Ireland"],
            types: ["SIGHTSEEING"],
            description: "",
            start: new Date(2014, 5, 30),
            end: new Date(2014, 6, 12),
            images: []
        },
        {
            title: "New York",
            countries: ["USA"],
            types: ["SIGHTSEEING"],
            description: "",
            start: new Date(2013, 9, 4),
            end: new Date(2013, 9, 12),
            images: []
        },
    ];
    journeys.forEach(function (journey) {
        var end = journey.end || new Date();
        journey.days = Math.round(Math.abs(end.getTime() - journey.start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    });
    return {
        getJourneys: function () {
            return journeys;
        },
        getAmountOfCountries: function () {
            var countryNames = [];
            journeys.forEach(function (journey) {
                countryNames = countryNames.concat(journey.countries);
            });
            // Filter unique country names
            countryNames = countryNames.filter(function (countryName, index) {
                return countryNames.indexOf(countryName) == index;
            });
            return countryNames.length;
        }
    };
});
//# sourceMappingURL=journeys.factory.js.map