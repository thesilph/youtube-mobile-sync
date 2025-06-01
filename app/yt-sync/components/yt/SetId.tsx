type SetIdProps = {
    setUserId: (id: string) => void;
};

export default function SetId({ setUserId }: SetIdProps) {


    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl font-bold mb-4">Set Your ID</h1>
                <p className="text-lg mb-6">Please enter your ID to continue.</p>
                <input
                    type="text"
                    placeholder="Enter your ID"
                    className="border border-gray-300 p-2 rounded mb-4 w-64"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => {
                        const input = document.querySelector('input[type="text"]') as HTMLInputElement | null;
                        if (input && input.value) {
                            setUserId(input.value);
                            // Optionally, you can redirect or perform another action here
                        } else {
                            alert('Please enter a valid ID');
                        }
                    }}>
                    Submit
                </button>
            </div>
        </>
    );
}