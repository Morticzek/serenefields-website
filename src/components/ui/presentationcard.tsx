// @ts-nocheck
// TO-DO: Add autoplay with delay to the carousel

import React, { useState } from 'react';
import { twMerge } from "tailwind-merge";

import styles from '../../assets/styles/components/presentationcard.module.css';

import FrozenmanHead from '../../assets/image/skins/frozenman_head.png?url';
import MorticzekHead from '../../assets/image/skins/morticzek_head.png?url';
import MivosVanosHead from '../../assets/image/skins/mivosvanos_head.png?url';
import QxertyHead from '../../assets/image/skins/qxerty_head.png?url';
import JustWhenHead from '../../assets/image/skins/justwhen_head.png?url';
import Chl0evHead from '../../assets/image/skins/chl0ev_head.png?url';
import SimonZoliHead from '../../assets/image/skins/simonzoli_head.png?url';

import Frozenman from '../../assets/image/skins/frozenman.webp?url';
import Morticzek from '../../assets/image/skins/morticzek.webp?url';
import MivosVanos from '../../assets/image/skins/mivosvanos.webp?url';
import Qxerty from '../../assets/image/skins/qxerty.webp?url';
import JustWhen from '../../assets/image/skins/justwhen.webp?url';
import Chl0ev from '../../assets/image/skins/chl0ev.webp?url';
import SimonZoli from '../../assets/image/skins/simonzoli.webp?url';

const heads = {
    frozenman: FrozenmanHead,
    morticzek: MorticzekHead,
    mivosvanos: MivosVanosHead,
    qxerty: QxertyHead,
    justwhen: JustWhenHead,
    chl0ev: Chl0evHead,
    simonzoli: SimonZoliHead,
};

const names: { [key: string]: string } = {
    frozenman: 'Frozenman',
    morticzek: 'Morticzek',
    mivosvanos: 'MivosVanos',
    qxerty: 'qxerty',
    justwhen: 'JustWhen',
    chl0ev: 'chl0ev',
    simonzoli: 'simonzoli',
};

const descriptions: { [key: string]: string } = {
    frozenman: 'Hey there, I’m Frozenman! As the owner of the server and a software engineer, I’m doing my best to make a fun game for everyone to enjoy. Let’s build something amazing together!',
    morticzek: 'Hey, I’m Morticzek! I handle website and game development, ensuring everything works seamlessly. I’m thrilled to be part of this awesome team and hope you enjoy your time with us!',
    mivosvanos: 'Hi, I’m MivosVanos! I specialize in Minecraft map building, and I love bringing creative worlds to life. Can’t wait for you to explore them!',
    qxerty: 'Hi there, I’m qxerty! I’m the storyline writer and game master, weaving narratives that keep you on the edge of your seat. Get ready for some unforgettable adventures!',
    justwhen: 'Hello, I’m JustWhen! As the Manager and storyline creator, I craft the adventures and keep everything running smoothly. Let’s dive into some epic tales!',
    chl0ev: 'Hey, I’m Chloe! I’m both a designer and map builder, blending aesthetics with creativity to make our world visually stunning. Excited for you to see what we’ve made!',
    simonzoli: 'Hi, I’m SimonZoli! I create the music that brings our game to life, setting the mood for your epic adventures. Let\'s make some great memories together!',
};

const images: { [key: string]: string } = {
    frozenman: Frozenman,
    morticzek: Morticzek,
    mivosvanos: MivosVanos,
    qxerty: Qxerty,
    justwhen: JustWhen,
    chl0ev: Chl0ev,
    simonzoli: SimonZoli,
};

const roles: { [key: string]: string } = {
    frozenman: 'Owner',
    morticzek: 'Developer',
    mivosvanos: 'Builder',
    qxerty: 'Game Master',
    justwhen: 'Game Master',
    chl0ev: 'Game Master',
    simonzoli: 'Music Composer',
};

const isContentTeam = (role: string) => {
    return role === 'Game Master' || role === 'Builder' || role === 'Developer' || role === 'Music Composer';
}

const PresentationCard = () => {
    // Define state variables
    const [selectedName, setSelectedName] = useState(names.frozenman);
    const [selectedDescription, setSelectedDescription] = useState(descriptions.frozenman);
    const [selectedImage, setSelectedImage] = useState(images.frozenman);
    const [selectedRole, setSelectedRole] = useState(roles.frozenman);
    const [selectedIsContentTeam, setSelectedIsContentTeam] = useState(isContentTeam(roles.frozenman));

    // Event handler for button click
    const handleButtonClick = (name: string) => {
        setSelectedName(names[name]);
        setSelectedDescription(descriptions[name]);
        setSelectedImage(images[name]);
        setSelectedRole(roles[name]);
        setSelectedIsContentTeam(isContentTeam(roles[name]));
    };

    return (
        <div className="container mx-auto p-4">
            <div
                className="flex justify-center bg-neutral-800 w-fit mx-auto m-4 text-color px-8 py-4 rounded-xl shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
                    {Object.keys(heads).map((name, index) => (
                        <div key={index} className="flex justify-center items-center mx-3">
                            <button
                                className="w-16 h-16 rounded-full border-2 border-transparent hover:border-gray-400 transition-colors duration-300"
                                onClick={() => handleButtonClick(name)}
                            >
                                <img
                                    src={heads[name]}
                                    alt="Head"
                                    className="w-16 h-16 rounded-full"
                                />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div
                className="hidden md:flex relative justify-center w-full lg:w-2/3 container mx-auto bg-neutral-800 rounded-xl shadow-lg divide-x-4 px-4">
                <div className="w-1/2 text-left divide-y-2 pr-4 p-6">
                    <div>
                        {
                            selectedIsContentTeam &&
                            <h3 className={twMerge(styles.h3, 'text-yellow-300')}>Content Team</h3>
                        }
                        {
                            selectedRole === 'Owner' && (
                                <h3 className={twMerge(styles.h3, 'mb-1', 'text-red-700')}>Owner</h3>
                            )
                        }
                        {
                            selectedRole !== 'Owner' && (
                                <h4 className={twMerge(styles.h3, 'mb-4')}>{selectedRole}</h4>
                            )
                        }
                    </div>
                    <h5 className={twMerge(styles.h2, 'mb-4')}>{selectedName}</h5>
                    <h6 className={twMerge(styles.p, 'pt-4')}>{selectedDescription}</h6>
                </div>
                <div className="flex justify-center w-1/2 items-center text-color p-6">
                    <img
                        src={selectedImage}
                        alt="Skin"
                        className="rounded-lg p-2"
                    />
                </div>
            </div>
            <div className="block md:hidden">
                <div
                    className="relative flex flex-col justify-center w-full lg:w-2/3 container mx-auto bg-neutral-800 rounded-xl shadow-lg px-4">
                    <div className="flex justify-center items-center w-full lg:w-1/2 text-color p-6">
                        <img
                            src={selectedImage}
                            alt="Skin"
                            className="rounded-lg p-2 max-h-[500px]"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 text-left p-6 divide-y-2">
                        <div>
                            {selectedIsContentTeam && (
                                <h3 className={twMerge(styles.h3, 'text-yellow-300')}>Content Team</h3>
                            )}
                            {selectedRole === 'Owner' ? (
                                <h3 className={twMerge(styles.h3, 'mb-1', 'text-red-700')}>Owner</h3>
                            ) : (
                                <h4 className={twMerge(styles.h3, 'mb-4')}>{selectedRole}</h4>
                            )}
                        </div>
                        <h5 className={twMerge(styles.h2, 'mb-4')}>{selectedName}</h5>
                        <h6 className={twMerge(styles.p, 'pt-4', 'text-lg', 'lg:text-2xl')}>{selectedDescription}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PresentationCard;
