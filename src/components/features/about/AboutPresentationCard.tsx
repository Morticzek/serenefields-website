//@ts-nocheck
import React, { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

import styles from '../../../assets/styles/components/presentationcard.module.css';

import OwnerBanner from '../../../assets/image/ranks/banner_owner.png?url';
import DeveloperBanner from '../../../assets/image/ranks/banner_developer.png?url';
import ModeratorBanner from '../../../assets/image/ranks/banner_moderator.png?url';
import MusicComposerBanner from '../../../assets/image/ranks/banner_music.png?url';
import GameMasterBanner from '../../../assets/image/ranks/banner_game_master.png?url';

import FrozenmanHead from '../../../assets/image/skins/frozenman_head.png?url';
import MorticzekHead from '../../../assets/image/skins/morticzek_head.png?url';
import QxertyHead from '../../../assets/image/skins/qxerty_head.png?url';
import SimonZoliHead from '../../../assets/image/skins/simonzoli_head.png?url';
import xNova204Head from '../../../assets/image/skins/xnova204_head.png?url';
import x_KefirHead from '../../../assets/image/skins/x_kefir_head.webp?url';

import Frozenman from '../../../assets/image/skins/frozenman.webp?url';
import Morticzek from '../../../assets/image/skins/morticzek.webp?url';
import Qxerty from '../../../assets/image/skins/qxerty.webp?url';
import SimonZoli from '../../../assets/image/skins/simonzoli.webp?url';
import xNova204 from '../../../assets/image/skins/xnova204.webp?url';
import x_Kefir from '../../../assets/image/skins/x_kefir.webp?url';

const heads = {
    frozenman: FrozenmanHead,
    morticzek: MorticzekHead,
    qxerty: QxertyHead,
    xnova204: xNova204Head,
    simonzoli: SimonZoliHead,
    x_kefir: x_KefirHead,
};

const images = {
    frozenman: Frozenman,
    morticzek: Morticzek,
    qxerty: Qxerty,
    xnova204: xNova204,
    simonzoli: SimonZoli,
    x_kefir: x_Kefir,
};

const names = {
    frozenman: 'Frozenman',
    morticzek: 'Morticzek',
    qxerty: 'qxerty',
    simonzoli: 'simonzoli99',
    xnova204: 'xNova204',
    x_kefir: 'x_Kefir',
};

const descriptions: Record<string, string> = {
    frozenman: "Hey, I'm Frozenman! I own the server and work as a software engineer. I'm doing my best to make an awesome server for everyone to enjoy. Let's create something cool together!",
    morticzek: "Hey there, I'm Morticzek! I take care of the website and server development, making sure everything runs smoothly. I'm stoked to be part of this awesome team, and I hope you have a blast with us!",
    qxerty: "Greetings! I'm qxerty, a moderator on the server. I'm here to help you out and make sure you have a great time. Let's have some fun together!",
    simonzoli: "Hey, I'm simonzoli99! I create the music that sets the mood for your adventures. Together, let's make some great memories on the server!",
    xnova204: "Hi, I'm xNova204! I'm a texture artist who loves crafting unique visuals that make our server stand out. I'm excited for you to explore the world we've built!",
    x_kefir: "Hey there, I'm x_Kefir! I'm a game master who loves creating exciting adventures for you to embark on. Get ready for some epic quests on our server!",
};

const banners = {
    frozenman: OwnerBanner,
    morticzek: DeveloperBanner,
    qxerty: ModeratorBanner,
    simonzoli: MusicComposerBanner,
    xnova204: GameMasterBanner,
    x_kefir: GameMasterBanner,
};

const AboutPresentationCard = () => {
    const [selectedName, setSelectedName] = useState(names.frozenman);
    const [selectedDescription, setSelectedDescription] = useState(descriptions.frozenman);
    const [selectedImage, setSelectedImage] = useState(images.frozenman);
    const [selectedBanner, setSelectedBanner] = useState(banners.frozenman);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const skinKeys = Object.keys(names);

    const updateSelectedState = (index: number) => {
        setAnimating(true);
        setTimeout(() => {
            const name = skinKeys[index];
            setSelectedName(names[name]);
            setSelectedDescription(descriptions[name]);
            setSelectedImage(images[name]);
            setSelectedBanner(banners[name]);
            setActiveIndex(index);
            setAnimating(false);
        }, 500);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % skinKeys.length;
            updateSelectedState(nextIndex);
        }, 6000);

        return () => clearInterval(interval);
    }, [activeIndex, skinKeys]);

    return (
        <div className="container mx-auto p-4">
            {/* Head buttons section with improved spacing */}
            <div className="flex justify-center bg-neutral-800/80 backdrop-blur-sm w-fit mx-auto m-4 text-color px-8 py-6 rounded-2xl shadow-xl">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {skinKeys.map((name, index) => (
                        <div key={index} className="flex justify-center items-center">
                            <button
                                className="w-16 h-16 rounded-full border-2 border-transparent hover:border-yellow-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                                onClick={() => {
                                    setAnimating(true);
                                    setTimeout(() => {
                                        updateSelectedState(index);
                                        setAnimating(false);
                                    }, 500);
                                }}
                            >
                                <img
                                    src={heads[name]}
                                    alt="Head"
                                    className="rounded-full transition-transform duration-300"
                                    width="64"
                                    height="64"
                                    loading="lazy"
                                />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop view with enhanced transitions */}
            <div className="hidden md:flex relative justify-center w-full lg:w-2/3 container mx-auto bg-neutral-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
                <div className="w-1/2 text-left p-8 space-y-6">
                    <img
                        src={selectedBanner}
                        alt="Rank Banner"
                        className="h-12 object-contain transition-all duration-500"
                    />
                    <h5 className={twMerge(styles.h2, 'transition-all duration-500')}>
                        {selectedName}
                    </h5>
                    <p className={twMerge(
                        styles.p,
                        'text-[1.25rem] md:text-2xl transition-all duration-500 text-[#e6e6e6]',
                        animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                    )}>
                        {selectedDescription}
                    </p>
                </div>
                <div className="flex justify-center w-1/2 items-center p-8">
                    <img
                        src={selectedImage}
                        alt="Skin"
                        className={twMerge(
                            'rounded-xl transition-all duration-500 transform max-h-[600px]',
                            animating ? 'opacity-0 translate-x-full scale-95' : 'opacity-100 translate-x-0 scale-100'
                        )}
                        loading="lazy"
                    />
                </div>
            </div>

            {/* Mobile view with enhanced transitions */}
            <div className="md:hidden flex-col w-full container mx-auto bg-neutral-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
                <div className="text-center p-6 space-y-4">
                    <img
                        src={selectedBanner}
                        alt="Rank Banner"
                        className="h-12 object-contain mx-auto transition-all duration-500"
                    />
                    <h5 className={twMerge(styles.h2, 'transition-all duration-500')}>
                        {selectedName}
                    </h5>
                </div>
                <div className="flex justify-center p-6">
                    <img
                        src={selectedImage}
                        alt="Skin"
                        className={twMerge(
                            'rounded-xl max-h-[300px] transition-all duration-500 transform',
                            animating ? 'opacity-0 translate-x-full scale-95' : 'opacity-100 translate-x-0 scale-100'
                        )}
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutPresentationCard;
