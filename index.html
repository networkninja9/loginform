<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(to right, #b5c4c1, #ACB6E5);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden;
        }

        .signup-container {
            background-color: #fff;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            width: 400px;
        }

        h2 {
            text-align: center;
            margin-bottom: 20px;
            font-size: 28px;
            color: #333;
        }

        label {
            font-size: 16px;
            color: #555;
        }

        input {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 16px;
            transition: border 0.3s ease;
        }

        input:focus {
            border-color: #74ebd5;
            outline: none;
        }

        button {
            width: 100%;
            padding: 12px;
            background-color: #000807;
            color: #fff;
            font-size: 16px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s;
        }

        button:hover {
            background-color: #66d3d0;
            transform: translateY(-2px);
        }

        button:active {
            background-color: #5bc2b9;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .error-message {
            color: red;
            font-size: 14px;
            display: none;
        }
    </style>
</head>
<body>
    <div class="signup-container">
        <h2>Sign Up</h2>
        <form id="signupForm">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" aria-label="Username" required>
                <div id="usernameError" class="error-message"></div>
            </div>

            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" aria-label="Email" required>
                <div id="emailError" class="error-message"></div>
            </div>

            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" aria-label="Password" required>
                <div id="passwordError" class="error-message"></div>
            </div>

            <button type="submit">Sign Up</button>
        </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script>
        document.getElementById('signupForm').addEventListener('submit', async (event) => {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Clear previous error messages
            document.querySelectorAll('.error-message').forEach(elem => elem.textContent = '');

            try {
                const response = await axios.post('http://localhost:5000/signup', {
                    username,
                    email,
                    password
                });
                alert('Sign up successful: ' + response.data.message);
            } catch (error) {
                console.error(error);
                if (error.response && error.response.data && error.response.data.error) {
                    const errorMessage = error.response.data.error;
                    document.querySelector('.error-message').textContent = errorMessage;
                    alert('Sign up failed: ' + errorMessage);
                }
            }
        });
    </script>
</body>
</html>
