# HackCaltech
Hackathon project for Caltech Hackathon

Google Chrome Extension that analyzes sentiment on websites and if notices negative sentiment, prompts you to think about your mood and listen to some happy music.

Inspiration:

Inspired by our own depressed moods that can result after looking at depressing webpages or the possibility of helping others combat their own depressed moods, we collectively came up with the idea that music has the unique capability of being able to lift moods as found in the following study by the NIH: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3741536/

What It Does:

Mood Lifter scans webpages and gives these pages a sentiment rating based on the Microsoft Cognitive Services Text Analytics Sentiment Analysis API. Based on this rating, Mood Lifter decides whether to engage in a dialog with the user about their mood. The user can let Mood Lifter know that they are in fact not in a depressed mood or can confirm their feelings and Mood Lifter will suggest some music to play that might brighten their day.

As an addition to playing music, in the future we hope to include tools for logging mood and to increase severity of mood messages accordingly.

How We Built it:

We built this using JavaScript and learned Ajax and how to parse JSON files. We used the Microsoft Cognitive Services Text Analytics Sentiment Analysis API for the sentiment analysis and the Spotify API for the music suggestion.

Challenges We Ran into:

Reading through brand new developer docs were challenging and learning JavaScript was challenging as well. We struggled with figuring out the best way for the Chrome extension to access the page contents and sent a POST request to MSFT Cognitive Services.

We also major struggled with coming up with an idea: we wrote a TON down on a piece of paper and wrote up specs for each idea about how they would be implemented as seen on our GoogleDoc: https://docs.google.com/document/d/1MJw_ha2m_8bKs1Vc-VgFSVky4SxMTmlqDdU4PaFrAGE/edit?usp=sharing

We then were divided into who wanted to sleep and who didn't. 

Trying to make requests to MSFT cog services that were too long and didn't know how to cut them down

Accomplishments We're Proud of:

1st Hackathon for 3/4 of us!

Writing our first webapp for 3/4 of us!

figuring out how to use the different APIs

making new friends :)

learning a lot and having fun!

What we learned:

More about JavaScript and how callback functions work

What's Next:

reach out to friends feature more built out

reach out to 911 more built out

Lots more hackathons!!
