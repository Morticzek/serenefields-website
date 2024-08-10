// @ts-nocheck
// TO-DO: Add autoplay with delay to the carousel

import React, { useState } from 'react';
import { twMerge } from "tailwind-merge";

import styles from '../../assets/styles/components/presentationcard.module.css';

import FrozenmanHead from '../../assets/image/skins/frozenman_head.png?url';
import MorticzekHead from '../../assets/image/skins/morticzek_head.png?url';
import QxertyHead from '../../assets/image/skins/qxerty_head.png?url';
import JustWhenHead from '../../assets/image/skins/justwhen_head.png?url';
import Chl0evHead from '../../assets/image/skins/chl0ev_head.png?url';
import SimonZoliHead from '../../assets/image/skins/simonzoli_head.png?url';
import xNova204Head from '../../assets/image/skins/xnova204_head.png?url';
import Anidiotnon_Head from '../../assets/image/skins/anidiotnon__head.png?url';
import MarkisPLHead from '../../assets/image/skins/markispl_head.png?url';
import SpideyZacHead from '../../assets/image/skins/spideyzac_head.png?url';
import PhobicShoeHead from '../../assets/image/skins/phobicshoe_head.png?url';

import Frozenman from '../../assets/image/skins/frozenman.webp?url';
import Morticzek from '../../assets/image/skins/morticzek.webp?url';
import Qxerty from '../../assets/image/skins/qxerty.webp?url';
import JustWhen from '../../assets/image/skins/justwhen.webp?url';
import Chl0ev from '../../assets/image/skins/chl0ev.webp?url';
import SimonZoli from '../../assets/image/skins/simonzoli.webp?url';
import xNova204 from '../../assets/image/skins/xnova204.webp?url';
import Anidiotnon from '../../assets/image/skins/anidiotnon_.webp?url';
import MarkisPL from '../../assets/image/skins/markispl.webp?url';
import SpideyZac from '../../assets/image/skins/spideyzac.webp?url';
import PhobicShoe from '../../assets/image/skins/phobicshoe.webp?url';

const heads = {
    frozenman: FrozenmanHead,
    morticzek: MorticzekHead,
    anidiotnon: Anidiotnon_Head,
    spideyzac: SpideyZacHead,
    phobicshoe: PhobicShoeHead,
    justwhen: JustWhenHead,
    qxerty: QxertyHead,
    chl0ev: Chl0evHead,
    xnova204: xNova204Head,
    simonzoli: SimonZoliHead,
    markispl: MarkisPLHead
};

const images: Record<string, string> = {
    frozenman: Frozenman,
    morticzek: Morticzek,
    anidiotnon: Anidiotnon,
    justwhen: JustWhen,
    qxerty: Qxerty,
    chl0ev: Chl0ev,
    xnova204: xNova204,
    simonzoli: SimonZoli,
    markispl: MarkisPL,
    spideyzac: SpideyZac,
    phobicshoe: PhobicShoe
};

const names: Record<string, string> = {
    frozenman: 'Frozenman',
    morticzek: 'Morticzek',
    qxerty: 'qxerty',
    justwhen: 'JustWhen',
    chl0ev: 'chl0ev',
    simonzoli: 'simonzoli99',
    xnova204: 'xNova204',
    anidiotnon: 'Anidiotnon_',
    markispl: 'MarkisPL',
    spideyzac: 'SpideyZac',
    phobicshoe: 'PhobicShoe'
};

const descriptions: Record<string, string> = {
    frozenman: "Hey, I'm Frozenman! I own the server and work as a software engineer. I'm doing my best to make an awesome server for everyone to enjoy. Let's create something cool together!",
    morticzek: "Hey there, I’m Morticzek! I take care of the website and server development, making sure everything runs smoothly. I’m stoked to be part of this awesome team, and I hope you have a blast with us!",
    qxerty: "Greetings! I’m qxerty, the one behind the storylines and game mastering. My goal is to weave tales that keep you hooked. Get ready for some unforgettable adventures on our server!",
    justwhen: "Hi! I’m JustWhen, and I’m all about creating fun quests and challenges as a game master. I hope you have a fantastic time exploring everything our server has to offer!",
    chl0ev: "Hello, I’m Chloe! I’m the designer and map builder, blending creativity with aesthetics to make our server look stunning. Can’t wait for you to see what we’ve crafted!",
    simonzoli: "Hey, I’m simonzoli99! I create the music that sets the mood for your adventures. Together, let’s make some great memories on the server!",
    xnova204: "Hi, I’m xNova204! I’m a texture artist who loves crafting unique visuals that make our server stand out. I’m excited for you to explore the world we’ve built!",
    anidiotnon: "Hey there, I’m Anidiotnon_! I’m a server developer with a passion for creating a fun and engaging experience for everyone. Let’s make something awesome together!",
    markispl: "Howdy! I’m MarkisPL, a builder who loves bringing our world to life with cool structures. I hope you enjoy exploring everything we’ve put together on the server!",
    spideyzac: "Hi, I’m SpideyZac! As a junior developer, I’m thrilled to be part of the team working on this server. Let’s create something amazing together!",
    phobicshoe: "Hello! I’m PhobicShoe, a junior developer who’s excited to help bring this server to life. Let’s build something great together!"
};

const roles: Record<string, string> = {
    frozenman: 'Owner',
    morticzek: 'Developer',
    qxerty: 'Game Master',
    justwhen: 'Game Master',
    chl0ev: 'Game Master',
    simonzoli: 'Music Composer',
    xnova204: 'Texture Artist',
    markispl: 'Builder',
    anidiotnon: 'Junior Developer',
    spideyzac: 'Junior Developer',
    phobicshoe: 'Junior Developer'
};

const isContentTeam = (role: string) => {
    return role !== 'Owner'
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
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
                                    loading="lazy"
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
                    <h6 className={twMerge(styles.p, 'pt-4 text-[1.25rem] md:text-2xl')}>{selectedDescription}</h6>
                </div>
                <div className="flex justify-center w-1/2 items-center text-color p-6">
                    <img
                        src={selectedImage}
                        alt="Skin"
                        className="rounded-lg p-2 max-h-[700px]"
                        loading="lazy"
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
                            loading="lazy"
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
                        <h6 className={twMerge(styles.p, 'pt-4 text-[1.25rem] md:text-2xl')}>{selectedDescription}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PresentationCard;
