# Hacktech - MoodTunes Chrome Extension
Hackathon project for Caltech Hackathon

Google Chrome Extension that analyzes sentiment on websites and if notices negative sentiment, prompts you to think about your mood and listen to some happy music.

# Inspiration:

Inspired by our own depressed moods that can result after looking at depressing webpages or the possibility of helping others combat their own depressed moods, we collectively came up with the idea that music has the unique capability of being able to lift moods as found in the following study by the NIH: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3741536/

# What It Does:

MoodTunes scans webpages and gives these pages a sentiment rating based on the Microsoft Cognitive Services Text Analytics Sentiment Analysis API. Based on this rating, MoodTunes decides whether to engage in a dialog with the user about their mood. The user can let MoodTunes know that they are in fact not in a depressed mood or can confirm their feelings and MoodTunes will suggest some music to play that might brighten their day. If enough web pages with low sentiment ratings are visited, then an option for calling teenline (a mental health hotline), a friend, or a family member will appear.

As an addition to playing music, in the future we hope to include tools for logging mood and to increase severity of mood messages accordingly.

# How We Built it:

We built this using JavaScript and learned Ajax and how to parse JSON files. We used the Microsoft Cognitive Services Text Analytics Sentiment Analysis API for the sentiment analysis and the Twilio API for the calling function.

# Challenges We Ran into:

Reading through brand new developer docs were challenging and learning JavaScript was challenging as well. We struggled with figuring out the best way for the Chrome extension to access the page contents and sent a POST request to MSFT Cognitive Services.

We also struggled with coming up with an idea: we wrote a TON down on a piece of paper and wrote up specs for each idea about how they would be implemented as seen on our GoogleDoc: https://docs.google.com/document/d/1MJw_ha2m_8bKs1Vc-VgFSVky4SxMTmlqDdU4PaFrAGE/edit?usp=sharing

We had trouble with deciding the formats our extension would work in. We started thinking of popups, considered banners, and then we finally settled on making our own modals.

We then were divided into who wanted to sleep and who didn't. 

Trying to make requests to MSFT cog services that were too long and didn't know how to cut them down.

# Accomplishments We're Proud of:

1st Hackathon for 3/4 of us!

Writing our first webapp for 3/4 of us!

figuring out how to use the different APIs

making new friends :)

Learning a lot and having fun!

about scope and how you have to make sure things are in the right scope: you can't create alerts in the popup html file because it's out of the popup's scope! breakthru!!

Really struggled with getting the name input to save.

# What we learned:

We learned a ton about JavaScript, html, and how callback functions work and got really good at looking through StackOverflow and Google along the way. There were a lot of moments where we overcomplicated what we were trying to do by overthinking it. For example, we learned how to make ajax post requests that are wayyyy simpler than going through node js and doing it that way. We also thought we needed a Spotify API when we could just embed the Spotify playlist in a new, smaller window. 

# What's Next:

In the future, we want to make our Chrome extension and app more customized to the user (name, playlists, family/friends' numbers). We could also incorporate the Spoitfy API to MoodTunes so that after logging in to their Spotify, they can directly change from MoodTunes the playlists they want linked to certain emotions and even the individual tracks on each album/playlist. For the MoodTunes app, we want to work on implementing the app with the camera so that everytime someone takes a selfie or picture, the app will run and lift their mood! 

Also lots more hackathons!!


## Script

# Natalie: Why

Inspired by how we have all noticed how music can really affect your mood. as an an anecdote just yesterday I wasn't listening to music in the morning because I didn't have headphones but then in the evening I got a pair of headphones from Christine and I can definitely say my mood was changed. I was feeling good, I was dancing and groovin, it was great!

A second inspiration was from my personal work on the Teenline hotline where I manned the phone. From my training, I know how important reaching out for help earlier is and how callers have spoken about how the little reminders to reach out make a difference.

Wanting to connect these two interests we created a Google Chrome Extension that monitors the sentiment of the webpages you view and suggests listening to moodboosting music and can suggest reaching out for further help if you have been viewing a lot of negative sentiment sites.

This app takes preventative measures for your mental health and will suggest listening to music and reaching out for help if need be.

Mental health is a 200 billion dollar industry in America (National Alliance on Mental Health) and these preventative measures can help alleviate this cost.


# Christine: Demo Walk through

load postivive sentiment site

load negative sentiment site

explain popups are only there for demo purposes to show whats going on in the background of our site.

explain conversation that happens between user and modal that leads user for music selection.

# Tarini: Continue walk through, explain music/twilio, discuss challenges

talk about how listening to music can take place of talking to a friend (in the case that one isn't availible)

explain how we use twilio to connect users with teenline, a mental health hotline, or their saved family member or friend

discuss challenges we ran into:
  -how google chrome extensions have very specific perspectives, navigating the content security policy was tricky, 
    -we wanted to change content of the popup based on things happening in the content.js file but this was restricted by chrome's restrictions which required us to use chrome's storage capabilities
    
 -we also ran into trouble trying to parse certain websites that had a lot of text content -> msft cognitive services only takes requests of 5100 characters so we needed to limit our requests to that
 
# hongsen: mobile app and what we hope to do in the future

-app is a fun way to explore mood and music

-we hope to incorporate image sentiment analysis as web pages content sentiment can change based on images

-we also hope to further customize the extension so that users can designate trusted facebook friends that they would like to reach out to in the case that their mentally distressed

-we also hope to add further spotify playlist customization

-we also hope to add mood logging so that users can monitor their mood over a period of time



