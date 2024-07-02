# swatlock

Description:

SWATLock is a proof-of-concept ransomware simulation designed solely for educational purposes. This application simulates the behavior of ransomware, including file encryption, decryption, and deletion sequences, providing a realistic yet controlled environment for learning and testing. This project is intended for cybersecurity research and education only and must not be used maliciously.

Features:

Encryption & Decryption:

Uses state-of-the-art encryption algorithms to encrypt files on specified drives.
Decryption process is initiated using a provided decryption key.
Decryption progress is displayed with a progress bar and percentage completion.
Countdown Timers:

Integrated countdown timer for file deletion sequence.
Customizable countdown dialogs to alert users about impending actions.
Remote stop signal check to halt the deletion process if required.
Dialogs & Prompts:

Termination key dialog to securely exit the application.
Custom secondary termination key dialog to stop the deletion process.
User-friendly dialogs for entering keys and responding to prompts.
Logging:

Real-time logging of activities with timestamps.
Color-coded log entries for easy identification of events and errors.
Interactive log display with a scrollable listbox.
Error Handling:

Robust error handling for file access permissions and invalid decryption keys.
Informative error messages and alerts to guide the user.
Secure Design:

Application ensures unauthorized access is restricted.
All sensitive operations are guarded by termination and secondary termination keys.
Installation:

Clone the repository:

git clone https://github.com/idsin02/swatlock.git
cd SWATLock


Install required dependencies:

pip install -r requirements.txt


Run the application:

python rans.py


Usage:

Running the Simulation:

The simulation starts with file encryption on specified drives.
Users can provide the decryption key to start the decryption process.
Countdown timers will alert the user of imminent file deletion if decryption is not completed in time.
Stopping the Simulation:

Enter the correct termination key to safely exit the application.
Use the secondary termination key to halt the deletion process remotely or locally.
Disclaimer:

This project is for educational purposes only. The author is not responsible for any misuse or damage caused by this software. Users are fully accountable for their actions.
