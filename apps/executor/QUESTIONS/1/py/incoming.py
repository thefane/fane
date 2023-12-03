import json
from usercode import user_function

def main():
    # Call the user function
    result = user_function()

    # Prepare the output
    output = {"output": "success" if result else "fail", "time": "1s", "storage": "1mb"}

    # Write the output to a JSON file
    with open('output.json', 'w') as f:
        json.dump(output, f)

if __name__ == "__main__":
    main()
