# swatlock

SWATLock is a proof-of-concept ransomware simulation designed solely for educational purposes. This application simulates the behavior of ransomware, including file encryption, decryption, and deletion sequences, providing a realistic yet controlled environment for learning and testing. This project is intended for cybersecurity research and education only and must not be used maliciously.

🚀 Features
Encryption & Decryption

🔒 File Encryption: Utilizes state-of-the-art encryption algorithms to encrypt files on specified drives.

🔑 Decryption Process: Decryption is initiated using a provided decryption key. The progress of decryption is displayed with a progress bar and percentage completion.


Countdown Timers

⏳ File Deletion Countdown: Integrated countdown timer for the file deletion sequence.

🔔 Customizable Dialogs: Countdown dialogs alert users about impending actions.

🛑 Remote Stop Signal: Checks for a remote stop signal to halt the deletion process if required. (Requires XAMPP server setup for communication.)


Dialogs & Prompts

🚪 Termination Key Dialog: Securely exit the application by entering a termination key.

⚙️ Secondary Termination Key Dialog: Enter a secondary termination key to stop the deletion process remotely or locally.

🗨️ User-Friendly Prompts: Dialogs for entering keys and responding to prompts.


Logging

📝 Real-Time Logging: Logs activities with timestamps and color-coded entries for easy identification of events and errors.

📜 Interactive Log Display: Displays logs in a scrollable listbox.


Error Handling

🚧 Robust Error Handling: Handles file access permissions and invalid decryption keys.

⚠️ Informative Alerts: Provides error messages and alerts to guide the user.


Secure Design

🔒 Access Restrictions: Ensures unauthorized access is restricted.

🔑 Sensitive Operations: Guards sensitive operations with termination and secondary termination keys.


🛠️ XAMPP Server Setup

This project uses an XAMPP server for the command and control functionalities to check for remote stop signals. Follow these steps to set up XAMPP:

Download XAMPP from the official XAMPP website.

Install XAMPP and start the Apache and MySQL services.

Configure the Server:

Place the check_stop_signal.php file in the htdocs/cryptlock/includes/api/ directory of your XAMPP installation.

Update the check_stop_signal.php file with the appropriate database connection settings.

🏗️ Installation
To get started with the SWATLock application:

Clone the Repository:

git clone https://github.com/idsin02/swatlock.git
cd SWATLock

Install Required Dependencies:
pip install -r requirements.txt

Run the Application:
python swatlock.py


🎯 Usage
Running the Simulation

The simulation starts with file encryption on specified drives.

Users can provide the decryption key to start the decryption process.

Countdown timers will alert the user of imminent file deletion if decryption is not completed in time.

Stopping the Simulation

Enter the correct termination key to safely exit the application.

Use the secondary termination key to halt the deletion process remotely or locally.


⚠️ Disclaimer
This project is for educational purposes only. The author is not responsible for any misuse or damage caused by this software. Users are fully accountable for their actions.
