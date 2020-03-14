from sklearn.cluster import KMeans

import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import requests
import time

# Import API key
#uncomment api_key if needed
# api_key = "717f5db46032a766d9b816399c6850cf"
api_key = "f78bc7bd6735591c70e2939381b857cc"
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
print(cities)
# Print the city count to confirm sufficient count
len(cities)

base_url = 'http://api.openweathermap.org/data/2.5/weather?'
units = 'imperial'
weather_df = pd.DataFrame(columns=['City','Latitude','Temperature(F)','Humidity(%)','Cloudiness(%)','Wind Speed(mph)'])

#defining variables
inertia_arr = []
percent_change = []
threshold = -0.05

#generating data
for count, item in enumerate(cities):
    city = item
    print(f'City Number {count}: {city.capitalize()}')
    try:
        response = requests.get(f'{base_url}appid={api_key}&q={city}&units={units}').json()
        lat = response['coord']['lat']
        lon = response['coord']['lon']
        temp = response['main']['temp']
        humidity = response['main']['humidity']
        clouds = response['clouds']['all']
        wind = response['wind']['speed']
        weather_df = weather_df.append([{'City':city,'Temperature(F)':temp,'Latitude':lat,'Longitude':lon,'Humidity(%)':humidity,'Cloudiness(%)':clouds,'Wind Speed(mph)':wind}])
    except:
        print(f'City Number {count}: Error collecting data')

#export data to csv.file
newfile = open("Global_Weather.txt","w+")
newfile.write(weather_df.to_csv(index=False))
newfile.close()


#defining inputs for k-means algorithm
X = weather_df[["Cloudiness(%)","Humidity(%)","Temperature(F)", "Wind Speed(mph)"]]
print(X)

#calculate inertia (sum of squares of distance to closest center)
def calc_inertia():
    for i in range (20):
        kmeans = KMeans(n_clusters=i+2)
        kmeans.fit(X)
        inertia_arr.append(kmeans.inertia_)

calc_inertia()

#calculate percent changes between different k

def calc_per_chg(inertia_arr):
    for i, inertia in enumerate(inertia_arr):
        change = (inertia_arr[i]-inertia_arr[i-1])/inertia_arr[i-1]
        percent_change.append(change)
    print(percent_change)

calc_per_chg(inertia_arr)
percent_change = percent_change[1:]
print(percent_change)

#select optimal k
def choose_k(percent_change):
    for i,change in enumerate(percent_change):
        if change >= threshold:
            return i+2
            break 

k = choose_k(percent_change)
print(k)

#define kmeans model with optimal k
kmeans = KMeans(n_clusters = k )


# Fit the model to the data
kmeans.fit(X)

# Use the data to predict the clusters
# save the predictions as `predicted_clusters`
predicted_clusters = kmeans.predict(X)

#add as new column in weather_df
weather_df["Cluster"] = predicted_clusters

centers = kmeans.cluster_centers_

#store centers in new dataframe
center_df = pd.DataFrame(centers, columns=['Cloudiness','Humidity','Temperature','Wind Speed'])
center_df["Clusters"] = [i for i in range(k)]

#sort temperatures of clusters in descending order
center_df = center_df.sort_values('Temperature',ascending=False)
#print centers
print(center_df)

# Write data to files
weather_df.to_csv("Global_Weather.csv", index=False)

center_df.to_csv("Weather_Center.csv", index=False)