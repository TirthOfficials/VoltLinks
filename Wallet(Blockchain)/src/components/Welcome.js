import React,{useContext, useState} from 'react';
import { FaConnectdevelop } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';
import { shortenAddress } from "../utils/ShortAdress";
import ReactPlayer from 'react-player';
import videoSrc from './loading.mp4';

const Welcome = () => {
    const { currentAccount, connectWallet } = useContext(AppContext);
    const [isVideoPlaying, setVideoPlaying] = useState(false);
    const handleTransferClick = () => {
        console.log('Transfer button clicked');
        if(!currentAccount){
        //     const win = window.open('loading.html', '_blank');
        // win.focus();
            setVideoPlaying(true);
        } else {
            connectWallet();
        }
    };
    
    
    return (
        <div className="welcome flex max-w-[1500px] m-auto justify-center items-center p-[100px] ">
            {isVideoPlaying && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1000,
                    backgroundColor: 'black',
                    overflow: 'hidden'
                }}>
    <ReactPlayer
    url={videoSrc}
    playing={true}
    controls={false}
    width="100%"
    height="100%"
    onEnded={() => {
        setVideoPlaying(false);
        window.location.href = "http://localhost:3000/buy-confirm-page";
    }}
/>
</div>
)}
            <div className="welcome-div-text md:flex-[0.5] flex justify-center px-20 flex-wrap items-center self-center">
                <div className=" w-full text-white text-center text-4xl py-3 font-bold">Connect Your Wallet</div>
                <div className="welcome-button flex items-center cursor-pointer">
                        <button
                            type='button'
                            // onClick={connectWallet}
                            onClick={handleTransferClick}
                            className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-lg cursor-pointer hover:bg-[#2546bd]'>
                            <FaConnectdevelop fontSize={25} className="text-white mr-0" />
                            <p className="text-white text-base font-semibold">
                                {!currentAccount
                                    ? "Transfer Funds"
                                    : shortenAddress(currentAccount)}
                            </p>
                            
                        </button>
                </div>
            </div>
        </div>
    );
};

export default Welcome;