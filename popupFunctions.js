function first_popup(sentiment_val)
{
	if (sentiment_val < 20)
	{
		starter = "We noticed you're feeling a bit stressed out. Are you ";
		// do button for [angry] 
		cont1 = ", ";
		// do button for [sad]
		cont2 = ", or ";
		// do button for [anxious]
		cont3 = "?";

		// detect click
		// if (click)
		//     second_popup(mood)
		// else
		//     fade after 10 sec
	}
}

function second_popup(mood)
{
	if (mood == "angry")
	{
		starter = "Would you like to ";
		// do button for [calm down]
		cont1 = " or ";
		// do button for [let it out]
		cont2 = "?";

		// detect click
		// if (click == calm down)
		//     url = choosePlaylist(anxiousFear)
		//     display url or embed() playlist
		// else if (click == let it out)
		//     url = choosePlaylist(anger)
		//     display url or embed() playlist
		// else
		//     fade after 10 sec
	}
	else if (mood == "sad")
	{
		starter = "Would you like to be ";
		// do button for [cheered up]
		cont1 = " or ";
		// do button for [feel it out]
		cont2 = "?";

		// detect click
		// if (click == cheered up)
		//     url = choosePlaylist(happy)
		//     display url or embed() playlist
		// else if (click == feel it out)
		//     url = choosePlaylist(sad)
		//     display url or embed() playlist
		// else
		//     fade after 10 sec
	}
	else
	{
		starter = "Let's ";
		// do button for [calm you down]

		// detect click
		// if (click == calm you down)
		//     url = choosePlaylist(anxiousFear)
		//     display url or embed() playlist
		// else
		//     fade after 10 sec
	}
}

