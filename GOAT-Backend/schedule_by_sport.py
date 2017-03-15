"""
This class returns a list of sports each with a list of games, each game being a list containing the following in ascending order:
0:date
2:opponent
3:location
4:time
5:results
"""

import sys
sys.path.insert(0, './lib')
import urllib2 
from bs4 import BeautifulSoup
import io
import json
import sys
import re
from urls import schedule_urls

reload(sys)
sys.setdefaultencoding('utf-8')

by_sport = []
for u in xrange(len(schedule_urls)):
    url = schedule_urls[u]

    page = urllib2.urlopen(url).read()
    soup = BeautifulSoup(page, 'html.parser')
    
    # Searching for the div that contains the schedule table
    scores_schedule = (soup.find("table", {"id":"schedule-table"})).find("tbody")

    # Scraping the dates
    date_tag = scores_schedule.select(".date")
    date = [str(dt.get_text().replace("\n", "").replace("\t", "").decode('ascii', 'ignore')) for dt in date_tag]

    # Scraping the opponents. Removed the '*' which means that it is a conference game
    opponent_tag = scores_schedule.select(".opponent")
    opponent = [re.sub(r'\([^)]*\)', '', str(ot.get_text().replace("Cal State", "CSU").replace("\n", "").replace("*", "").replace("\t", "").replace("*", "").decode('ascii', 'ignore'))) for ot in opponent_tag]

    tournament = ""
    strings = ["Day One", "Day Two", "Day Three", "Day Four", "Day Five"]

    # goes through all the opponent tags, checks if it has any of the "Day" strings
    # then finds the first instance with the opponent's parent's id 
    for o in xrange(len(opponent_tag)):
        oppo = opponent_tag[o]
        if opponent[o] in strings:
            key = oppo.parent['schedule-id']
            # find returns an object (the whole chunk) -- we only want the name
            tournament = scores_schedule.find("tr",{'schedule-id':
                key}).get_text().replace("\n","").replace("\t","")
            # temp store old name and then append tournament/invitational in front
	    opponent[o] = (tournament + " " + opponent[o]).replace("Cal State", "CSU")
    

    # Scraping the location
    location_tag = scores_schedule.select(".location")
    location = [str(lt.get_text().replace("\n", "").replace("\t", "").decode('ascii', 'ignore')) for lt in location_tag]

    # Scraping the time
    time_tag = scores_schedule.select(".time")
    time = [str(timet.get_text().replace("\n", "").replace("\t", "").decode('ascii', 'ignore')) for timet in time_tag]

    # Scraping the results. Removed the Info - Schedule and Recap texts
    results_tag = scores_schedule.select(".results")
    results = [re.sub(r'\([^)]*\)', '', rt.get_text().replace("\n", "").replace("\t", "").replace("Schedule - Info", "").replace("Info - Schedule", "").replace("Recap", "").decode('ascii', 'ignore')) for rt in results_tag]
    
    # Grouping the information based on each game and not on date/team/opponent/location/time/results
    games = []
    for i in range (len(date)):
        if ("/" in opponent[i]) or ("," in opponent[i]) or ("vs." in opponent[i]):
            continue
        games.append([ date[i], opponent[i], location[i], time[i], results[i] ])
    
    by_sport.append(games)

# END OF FOR LOOP ----------------------------

#Writing the data to a file
with open('./static/schedule_individual.json', 'w+') as f:
    json.dump( by_sport, f );
