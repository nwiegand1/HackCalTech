string get_plaintext();
	// gets plaintext from website, returns it as a string
	// natalie
(keywords, sentiment_val) text_analysis();
	// runs plaintext through microsoft api, returns tuple of keywords and sentiment value
	// tarini
boolean sentiment_enough();
	// determines if the sentiment is high/low enough to do things with, returns boolean
	// tarini
boolean relationship_analysis();
	// checks for relationship keywords, returns boolean
	// tarini
string/int/whatever first_popup();
	// depending on vals of sentiment_enough() and relationship_analysis(), gives popup to user
	// will choose from a list of starter sentences ["we noticed blah", "hey, are you blah", "etc"]
	// will give starter sentence, then list of emotions [sad], [angry], [etc] depending on relationship_analysis
	// returns user choice as a string, int, whatever
	// popup fades away after 10 sec if no interaction, has ability to cancel out of it
	// natalie
string/int/whatever second_popup();
	// takes in previous value and outputs second value based on that, along with a choice from list of starter sentences
	// ex. if chose [sad] in previous, then will output "would you like to cheer up [happy] or feel it out [sad]"
	// returns user choice as string, int, whatever
	// popup doesn't fade away ever, but has ability to cancel out of it
	// natalie
string pick_playlist();
	// will take in playlist type from last function and will select random number and pick random playlist from the list
	// returns either uri as a string or the url
	// tarini
void embed();
	// will interact with spotify api to embed spotify playlist in new popup window
	// natalie and christine


// extra features, if we have time
void 