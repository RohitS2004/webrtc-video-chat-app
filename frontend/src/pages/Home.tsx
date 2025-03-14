import { Call, Join } from "../assets";
import { Button } from "../components";

const Home = () => {

    const handleCreateCall = () => {
        // What should happen when the user clicks on the create call button
        // A new room should be created at the server and the this user should be added to that room 
        // Then the user should be redirected to the Room Page
        // The server should return a room id which will we can share with the second person to join the call
    }

    const handleJoinCall = () => {

    }

    return (
        <div className="bg-slate-900 min-h-screen flex justify-center items-center">
            <div className="flex flex-col items-center gap-5">
                <Button
                    buttonIcon={
                        <Call
                            width={28}
                            height={28}
                            strokeColor="#000"
                            strokeWidth={2}
                        />
                    }
                    buttonFontWeight="semibold"
                    buttonPadding="px-8 py-2"
                    buttonBorderRadius="rounded-sm"
                    buttonBackgroundColor="bg-amber-500"
                    buttonTextSize="2xl"
                    buttonTextColor="text-black"
                    buttonText="Create Call"
                    extraClasses="flex gap-5 items-center hover:opacity-50 active:scale-95 transition-all duration-200 ease-in-out"
                />

                <Button
                    buttonIcon={
                        <Join
                            width={28}
                            height={28}
                            strokeColor="#000"
                            strokeWidth={2}
                        />
                    }
                    buttonFontWeight="semibold"
                    buttonPadding="px-8 py-2"
                    buttonBorderRadius="rounded-sm"
                    buttonBackgroundColor="bg-green-500"
                    buttonTextSize="2xl"
                    buttonTextColor="text-black"
                    buttonText="Join Call"
                    extraClasses="flex gap-5 items-center hover:opacity-50 active:scale-95 transition-all duration-200 ease-in-out w-full"
                />
            </div>
        </div>
    );
};

export default Home;
