import base64

encoded_pass = "RzRoTWdGckI="  # ersetze dies mit deinem kodierten Passwort
decoded_pass = base64.b64decode(encoded_pass).decode("utf-8")
print(decoded_pass)
