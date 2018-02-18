from firebase import firebase
import pandas as pd

FIREBASE_URL = "https://monitor-a80a5.firebaseio.com/"

def get_df():
    fb = firebase.FirebaseApplication(FIREBASE_URL, None) # Create a reference to the Firebase Application
    result = fb.get('', None)
    result = list(result['activity'].values())
    result_columns = {key: [row[key] for row in result] for key in result[0]}
    df = pd.DataFrame(result_columns)
    return df
