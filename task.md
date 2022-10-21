API KEY
bf40c48035034c209c452800221310

Preparing for the task:

1. Register at www.weatherapi.com
2. Once registered, you will receive an API key
3. Copy the key and go to the 'API Explorer' tab from the left bar on the dashboard
4. Paste your API Key in the field given above
5. Change the city from under 'Value' of your choice
6. Click 'show response'
7. You will see in the output the API called, Response headers and response
8. For this given task, you'd use APIs 'Current' and 'Forecast' tab (from the set of 8 tabs Current, Forecast, Search, History, Future, Astronomy, Time Zone, Sports)
   Performing the task of <API Mapper>
9. Create tables in an open-source database like MySQL or any database or flat file of your choice.

10. In the table store attributes of API like URL, key and other mandatory fields and the parameter name

http://api.weatherapi.com/v1/current.json?key=a7878497d5aa4e9bbe1145219220703&q=L ondon&aqi=no

http://api.weatherapi.com/v1/forecast.json?key=a7878497d5aa4e9bbe1145219220703&q= London&days=1&aqi=no&alerts=no
Give label to each of the records which can selected from droplist form (like weatherapi current, weatherapi forecast) Depending upon the selection and variable of the city name passed execute the api

3. Create a mapper of the response for each api using the following response section in the tables beforehand

A. Current api
API Response Section-
"location": {
"name": "Kolkata",
"region": "West Bengal",
"country": "India",
"lat": 22.57,
"lon": 88.37,
"tz_id": "Asia/Kolkata",
"localtime_epoch": 1646968169, "localtime": "2022-03-11 8:39" },
Mapper
name:town
region:state
Country:nation
lat: latitude
lon:longitude
tz_id :Time Zone
localtime: Time

B. Forecast API
API Response Section-
"astro": {
"sunrise": "06:36 AM", "sunset": "06:27 PM", "moonrise": "12:02 PM", "moonset": "01:44 AM", "moon_phase": "First Quarter", "moon_illumination": "56" },

Mapper
sunrise:Dawn
sunset:Dusk
moonrise:moon lit
mmoonset:soon sleep
moon_phase:orientation
moon_illumination:Illumination

4. Now execute both apis one by one but throw their response as a custom api endpoint which show field name as picked from table configurations.

Note: we can change the mapper in the table on the fly such that in next execution ,it should pick changed labels in the custom api endpoint
