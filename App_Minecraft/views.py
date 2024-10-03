# views.py
import requests
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

# @require_http_methods(["GET"])
# def get_player_data(request, username):
#     """
#     Proxy request to get player data from Mojang API.
#     """
#     logger.debug(f"Received request for player data: {username}")
#     print(f"Received request for player data: {username}")  # Debugging print statement
#     try:
#         # Fetch UUID from Mojang API
#         uuid_response = requests.get(
#             f"https://api.mojang.com/users/profiles/minecraft/{username}"
#         )

#         # Check if the player is found
#         if uuid_response.status_code == 204:
#             return JsonResponse({"error": "Player not found"}, status=404)

#         player_uuid = uuid_response.json()["id"]

#         # Fetch player profile from Mojang session server
#         profile_response = requests.get(
#             f"https://sessionserver.mojang.com/session/minecraft/profile/{player_uuid}"
#         )
#         profile_data = profile_response.json()

#         # Prepare the response data
#         player_data = {
#             "name": profile_data["name"],
#             "id": profile_data["id"],
#             "skinUrl": f"https://crafatar.com/avatars/{profile_data['id']}",
#         }

#         return JsonResponse(player_data)

#     except requests.RequestException as e:
#         return JsonResponse({"error": str(e)}, status=500)

# from django.http import JsonResponse

# @require_http_methods(["GET"])
# def get_player_data(request, username):
#     try:
#         uuid_response = requests.get(
#             f"https://api.mojang.com/users/profiles/minecraft/{username}"
#         )

#         if uuid_response.status_code == 204:
#             return JsonResponse({"error": "Player not found"}, status=404)

#         player_uuid = uuid_response.json()["id"]

#         profile_response = requests.get(
#             f"https://sessionserver.mojang.com/session/minecraft/profile/{player_uuid}"
#         )
#         profile_data = profile_response.json()

#         player_data = {
#             "name": profile_data["name"],
#             "id": profile_data["id"],
#             "skinUrl": f"https://crafatar.com/avatars/{profile_data['id']}",
#         }

#         response = JsonResponse(player_data)
#         # Manually add CORS headers to the response
#         response["Access-Control-Allow-Origin"] = "http://localhost:5173"
#         response["Access-Control-Allow-Credentials"] = "true"
#         response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
#         response["Access-Control-Allow-Headers"] = "Authorization, Content-Type"
#         return response

#     except requests.RequestException as e:
#         return JsonResponse({"error": str(e)}, status=500)


from django.http import JsonResponse, HttpResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
import requests

@csrf_exempt  # Exempt the CSRF check for CORS requests
@require_http_methods(["GET", "OPTIONS"])  # Allow GET and OPTIONS methods
def get_player_data(request, username):
    # Check if this is an OPTIONS request (preflight)
    if request.method == "OPTIONS":
        # Return an empty response with CORS headers
        response = HttpResponse()
        response["Access-Control-Allow-Origin"] = "http://localhost:5173"
        response["Access-Control-Allow-Credentials"] = "true"
        response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
        response["Access-Control-Allow-Headers"] = "Authorization, Content-Type"
        return response

    try:
        # Fetch UUID from Mojang API
        uuid_response = requests.get(f"https://api.mojang.com/users/profiles/minecraft/{username}")

        # Check if the player is found
        if uuid_response.status_code == 204 or uuid_response.status_code == 404:
            return JsonResponse({"error": "Player not found"}, status=404)

        player_uuid = uuid_response.json()["id"]

        # Fetch player profile from Mojang session server
        profile_response = requests.get(f"https://sessionserver.mojang.com/session/minecraft/profile/{player_uuid}")
        profile_data = profile_response.json()

        # Prepare the response data
        player_data = {
            "name": profile_data["name"],
            "id": profile_data["id"],
            "skinUrl": f"https://crafatar.com/avatars/{profile_data['id']}",
        }

        response = JsonResponse(player_data)
        # Manually add CORS headers to the response
        response["Access-Control-Allow-Origin"] = "http://localhost:5173"
        response["Access-Control-Allow-Credentials"] = "true"
        response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
        response["Access-Control-Allow-Headers"] = "Authorization, Content-Type"
        return response

    except requests.RequestException as e:
        response = JsonResponse({"error": str(e)}, status=500)
        response["Access-Control-Allow-Origin"] = "http://localhost:5173"
        response["Access-Control-Allow-Credentials"] = "true"
        response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
        response["Access-Control-Allow-Headers"] = "Authorization, Content-Type"
        return response

