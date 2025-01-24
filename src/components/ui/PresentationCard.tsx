//@ts-nocheck
import React, { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

import styles from '../../assets/styles/components/presentationcard.module.css';

import FrozenmanHead from '../../assets/image/skins/frozenman_head.png?url';
import MorticzekHead from '../../assets/image/skins/morticzek_head.png?url';
import QxertyHead from '../../assets/image/skins/qxerty_head.png?url';
import SimonZoliHead from '../../assets/image/skins/simonzoli_head.png?url';
import xNova204Head from '../../assets/image/skins/xnova204_head.png?url';
// import Anidiotnon_Head from '../../assets/image/skins/anidiotnon__head.png?url';
// import SpideyZacHead from '../../assets/image/skins/spideyzac_head.png?url';
// import PhobicShoeHead from '../../assets/image/skins/phobicshoe_head.png?url';
import x_KefirHead from '../../assets/image/skins/x_kefir_head.webp?url';

import Frozenman from '../../assets/image/skins/frozenman.webp?url';
import Morticzek from '../../assets/image/skins/morticzek.webp?url';
import Qxerty from '../../assets/image/skins/qxerty.webp?url';
import SimonZoli from '../../assets/image/skins/simonzoli.webp?url';
import xNova204 from '../../assets/image/skins/xnova204.webp?url';
// import Anidiotnon from '../../assets/image/skins/anidiotnon_.webp?url';
// import SpideyZac from '../../assets/image/skins/spideyzac.webp?url';
// import PhobicShoe from '../../assets/image/skins/phobicshoe.webp?url';
import x_Kefir from '../../assets/image/skins/x_kefir.webp?url';

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
    // anidiotnon: 'Anidiotnon_',
    // spideyzac: 'SpideyZac',
    // phobicshoe: 'PhobicShoe',
    x_kefir: 'x_Kefir',
};

const descriptions: Record<string, string> = {
    frozenman: "Hey, I'm Frozenman! I own the server and work as a software engineer. I'm doing my best to make an awesome server for everyone to enjoy. Let's create something cool together!",
    morticzek: "Hey there, I’m Morticzek! I take care of the website and server development, making sure everything runs smoothly. I’m stoked to be part of this awesome team, and I hope you have a blast with us!",
    qxerty: "Greetings! I’m qxerty, a moderator on the server. I’m here to help you out and make sure you have a great time. Let’s have some fun together!",
    simonzoli: "Hey, I’m simonzoli99! I create the music that sets the mood for your adventures. Together, let’s make some great memories on the server!",
    xnova204: "Hi, I’m xNova204! I’m a texture artist who loves crafting unique visuals that make our server stand out. I’m excited for you to explore the world we’ve built!",
    // anidiotnon: "Hey there, I’m Anidiotnon_! I’m a server developer with a passion for creating a fun and engaging experience for everyone. Let’s make something awesome together!",
    // spideyzac: "Hi, I’m SpideyZac! As a junior developer, I’m thrilled to be part of the team working on this server. Let’s create something amazing together!",
    // phobicshoe: "Hello! I’m PhobicShoe, a junior developer who’s excited to help bring this server to life. Let’s build something great together!",
    x_kefir: "Hey there, I’m x_Kefir! I’m a game master who loves creating exciting adventures for you to embark on. Get ready for some epic quests on our server!",
};

const roles = {
    frozenman: 'Owner',
    morticzek: 'Developer',
    qxerty: 'Moderator',
    simonzoli: 'Music Composer',
    xnova204: 'Texture Artist',
    // anidiotnon: 'Junior Developer',
    // spideyzac: 'Junior Developer',
    // phobicshoe: 'Junior Developer',
    x_kefir: 'Game Master',
};

const isContentTeam = (role: string) => {
    return role !== 'Owner';
};

const PresentationCard = () => {
    const [selectedName, setSelectedName] = useState(names.frozenman);
    const [selectedDescription, setSelectedDescription] = useState(descriptions.frozenman);
    const [selectedImage, setSelectedImage] = useState(images.frozenman);
    const [selectedRole, setSelectedRole] = useState(roles.frozenman);
    const [selectedIsContentTeam, setSelectedIsContentTeam] = useState(isContentTeam(roles.frozenman));
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const skinKeys = Object.keys(names);

    const updateSelectedState = (index: number) => {
        const name = skinKeys[index];
        setSelectedName(names[name]);
        setSelectedDescription(descriptions[name]);
        setSelectedImage(images[name]);
        setSelectedRole(roles[name]);
        setSelectedIsContentTeam(isContentTeam(roles[name]));
        setActiveIndex(index);
    };

    // Autoplay logic
    useEffect(() => {
        const interval = setInterval(() => {
            setAnimating(true); // Start fade-out
            setTimeout(() => {
                const nextIndex = (activeIndex + 1) % skinKeys.length;
                updateSelectedState(nextIndex);
                setAnimating(false); // Start fade-in
            }, 500); // 500ms corresponds to the duration of fade-out
        }, 6000); // Change every 6 seconds, allowing for 500ms of animation

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [activeIndex, skinKeys]);

    return (
        <div className="container mx-auto p-4">
            <div
                className="flex justify-center bg-neutral-800 w-fit mx-auto m-4 text-color px-8 py-4 rounded-xl shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {skinKeys.map((name, index) => (
                        <div key={index} className="flex justify-center items-center mx-3">
                            <button
                                className="w-16 h-16 rounded-full border-2 border-transparent hover:border-gray-400 transition-colors duration-300"
                                onClick={() => {
                                    setAnimating(true); // Start fade-out
                                    setTimeout(() => {
                                        updateSelectedState(index);
                                        setAnimating(false); // Start fade-in
                                    }, 500); // 500ms corresponds to the duration of fade-out
                                }}
                            >
                                <img src={heads[name]} alt="Head" className="w-16 h-16 rounded-full" loading="lazy"/>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="hidden md:flex relative justify-center w-full lg:w-2/3 container mx-auto bg-neutral-800 rounded-xl shadow-lg divide-x-4 px-4">
                <div className="w-1/2 text-left divide-y-2 pr-4 p-6">
                    {selectedIsContentTeam && <h3 className={twMerge(styles.h3, 'text-yellow-300')}>Content Team</h3>}
                    {selectedRole === 'Owner' ? <h3 className={twMerge(styles.h3, 'text-red-700')}>Owner</h3> :
                        <h4 className={twMerge(styles.h3)}>{selectedRole}</h4>}
                    <h5 className={twMerge(styles.h2)}>{selectedName}</h5>
                    <h6 className={twMerge(
                        styles.p,
                        'pt-4 text-[1.25rem] md:text-2xl',
                        animating ? 'animate-fadeOut' : 'animate-fadeIn'
                    )}>
                        {selectedDescription}
                    </h6>
                </div>
                <div className="flex justify-center w-1/2 items-center text-color p-6">
                    <img
                        src={selectedImage}
                        alt="Skin"
                        className={twMerge('rounded-lg p-2 max-h-[700px]', animating ? 'animate-fadeOutRight' : 'animate-fadeInLeft')}
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="md:hidden flex-col w-full container mx-auto bg-neutral-800 rounded-xl shadow-lg px-4">
                <div className="text-center p-4">
                    {selectedIsContentTeam && <h3 className={twMerge(styles.h3, 'text-yellow-300')}>Content Team</h3>}
                    {selectedRole === 'Owner' ?
                        <h3 className={twMerge(styles.h3, 'text-red-700')}>Owner</h3> :
                        <h4 className={twMerge(styles.h3)}>{selectedRole}</h4>
                    }
                    <h5 className={twMerge(styles.h2)}>{selectedName}</h5>
                </div>

                <div className="flex justify-center p-4">
                    <img
                        src={selectedImage}
                        alt="Skin"
                        className={twMerge(
                            'rounded-lg p-2 max-h-[300px]',
                            animating ? 'animate-fadeOutRight' : 'animate-fadeInLeft'
                        )}
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};

export default PresentationCard;
