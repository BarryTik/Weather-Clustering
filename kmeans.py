from sklearn.cluster import KMeans

import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import requests
import time

# Import API key
api_key = "717f5db46032a766d9b816399c6850cf"
print(api_key)

# Incorporated citipy to determine city based on latitude and longitude
from citipy import citipy

# Output File (CSV)
output_data_file = "output_data/cities.csv"

# Range of latitudes and longitudes
lat_range = (-90, 90)
lng_range = (-180, 180)

# List for holding lat_lngs and cities
lat_lngs = []
cities = []

# Create a set of random lat and lng combinations
lats = np.random.uniform(low=-90.000, high=90.000, size=1500)
lngs = np.random.uniform(low=-180.000, high=180.000, size=1500)
lat_lngs = zip(lats, lngs)

# Identify nearest city for each lat, lng combination
for lat_lng in lat_lngs:
    city = citipy.nearest_city(lat_lng[0], lat_lng[1]).city_name
    
    # If the city is unique, then add it to a our cities list
    if city not in cities:
        cities.append(city)

# Print the city count to confirm sufficient count
len(cities)

base_url = 'http://api.openweathermap.org/data/2.5/weather?'
units = 'imperial'
weather_df = pd.DataFrame(columns=['City','Latitude','Temperature','Humidity','Cloudiness','Wind Speed'])

#defining variables
inertia_arr = []
percent_change = []
threshold = -0.05

generate_data()

X = weather_df[["Cloudiness","Humidity","Temperature", "Wind Speed"]]

#calculate sum of squares of distance to closest center
calc_inertia()

#calculate percent changes between different k
calc_per_chg(inertia_arr)

#select optimal k
k = choose_k(percent_change)


kmeans = KMeans(n_clusters = k )

# Fit the model to the data
kmeans.fit(X)

# Use the data to predict the clusters
# save the predictions as `predicted_clusters`
predicted_clusters = kmeans.predict(X)

def generate_data():
    for count, item in enumerate(cities):
        city = item
        #print(f'City Number {count}: {city.capitalize()}')
        try:
            response = requests.get(f'{base_url}appid={api_key}&q={city}&units={units}').json()
            lat = response['coord']['lat']
            lon = response['coord']['lon']
            temp = response['main']['temp']
            humidity = response['main']['humidity']
            clouds = response['clouds']['all']
            wind = response['wind']['speed']
            weather_df = weather_df.append([{'City':city,'Temperature':temp,'Latitude':lat,'Longitude':lon,'Humidity':humidity,'Cloudiness':clouds,'Wind Speed':wind}])
        except:
            print(f'City Number {count}: Error collecting data')


def calc_inertia():
    for i in range (20):
        kmeans = KMeans(n_clusters=i+2)
        kmeans.fit(X)
        inertia_arr.append(kmeans.inertia_)

def calc_per_chg(inertia_arr):
    for i, inertia in enumerate(inertia_arr):
        change = (inertia_arr[i]-inertia_arr[i-1])/inertia_arr[i-1]
        percent_change.append(change)

def choose_k(percent_change):
    for i,change in enumerate(percent_change):
        if change >= threshold:
            return i
        break      
