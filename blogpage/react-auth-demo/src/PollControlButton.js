import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3010');

const PollControlButton = () => {
    const [pollControllStatus, setPollControllStatus] = useState(null);
    const [pollData, setPollData] = useState()

    useEffect(() => {
        fetchPollData();
    }, []);

    const fetchPollData = async () => {
        try {
            const response = await fetch('http://localhost:3010/get-polls');
            const polls = await response.json();
            console.log('Fetched Poll Data:', polls)
            polls.map((data) => (setPollData(data._id)))
            const selectedPoll = polls.length > 0 ? polls[0] : null;

            if (selectedPoll) {
                console.log('Selected Poll:', selectedPoll);

                // await controlPoll(selectedPoll._id);
            } else {
                console.log('Poll not found.');
            }
        } catch (error) {
            console.error('Error fetching poll data:', error);
        }
    };

    const handlePollControl = () => {
        try {
            socket.emit("pollControllRequest", pollData);

            socket.on('pollcontrolledsuccess', async (data) => {
                console.log("1111111111data-->", data);
                setPollControllStatus(data);

                await updatedPoll();
            });
        } catch (error) {
            console.error('Error controlling poll:', error);
        }
    };

    const updatedPoll = async () => {
        try {
            console.log("Updating poll...");
        } catch (error) {
            console.error('Error updating poll:', error);
        }
    };

    return (
        <div>
            <button onClick={handlePollControl}>Control Poll</button>
            {pollControllStatus && (
                <p>Poll Control Status: {pollControllStatus.status}</p>
            )}
        </div>
    );
};

export default PollControlButton;
