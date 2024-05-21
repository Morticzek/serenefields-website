// @ts-nocheck

import React, { useState } from 'react';
import { twMerge } from "tailwind-merge";

import styles from '../../assets/styles/components/presentationcard.module.css';

import FrozenmanHead from '../../assets/image/skins/frozenman_head.png?url';
import MorticzekHead from '../../assets/image/skins/morticzek_head.png?url';
import MivosVanosHead from '../../assets/image/skins/mivosvanos_head.png?url';
import QxertyHead from '../../assets/image/skins/qxerty_head.png?url';
import JustWhenHead from '../../assets/image/skins/justwhen_head.png?url';

import Frozenman from '../../assets/image/skins/frozenman.webp?url';
import Morticzek from '../../assets/image/skins/morticzek.webp?url';
import MivosVanos from '../../assets/image/skins/mivosvanos.webp?url';
import Qxerty from '../../assets/image/skins/qxerty.webp?url';
import JustWhen from '../../assets/image/skins/justwhen.webp?url';

const heads = {
    frozenman: FrozenmanHead,
    morticzek: MorticzekHead,
    mivosvanos: MivosVanosHead,
    qxerty: QxertyHead,
    justwhen: JustWhenHead,
};

const names: { [key: string]: string } = {
    frozenman: 'Frozenman',
    morticzek: 'Morticzek',
    mivosvanos: 'MivosVanos',
    qxerty: 'Qxerty',
    justwhen: 'JustWhen',
};

const descriptions: { [key: string]: string } = {
    frozenman: 'Hey there, I’m Frozenman! As the owner of the server and a software engineer, I’m doing my best to make a fun game for everyone to enjoy. Let’s build something amazing together!',
    morticzek: 'Hey, I’m Morticzek! I handle website and game development, ensuring everything works seamlessly. I’m thrilled to be part of this awesome team and hope you enjoy your time with us!',
    mivosvanos: 'Hi, I’m MivosVanos! I specialize in Minecraft map building, and I love bringing creative worlds to life. Can’t wait for you to explore them!',
    qxerty: 'Hi there, I’m Qxerty! I’m the storyline writer and game master, weaving narratives that keep you on the edge of your seat. Get ready for some unforgettable adventures!',
    justwhen: 'Hello, I’m JustWhen! As the Manager and storyline creator, I craft the adventures and keep everything running smoothly. Let’s dive into some epic tales!',
};

const images: { [key: string]: string } = {
    frozenman: Frozenman,
    morticzek: Morticzek,
    mivosvanos: MivosVanos,
    qxerty: Qxerty,
    justwhen: JustWhen,
};

const roles: { [key: string]: string } = {
    frozenman: 'Owner',
    morticzek: 'Developer',
    mivosvanos: 'Builder',
    qxerty: 'Game Master',
    justwhen: 'Game Master',
};

const colors: { [key: string]: string } = {
    frozenman: 'text-red-700',
    morticzek: 'text-red-500',
    mivosvanos: 'text-yellow-500',
    qxerty: 'text-orange-500',
    justwhen: 'text-orange-500',
};

const isContentTeam = (role: string) => {
    return role === 'Game Master' || role === 'Builder' || role === 'Developer';
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
            <div className="flex justify-center bg-neutral-800 w-fit mx-auto m-4 text-color px-8 py-4 rounded-xl shadow-lg">
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
            <div className="relative flex justify-center w-full lg:w-2/3 container mx-auto bg-neutral-800 rounded-xl shadow-lg divide-x-4 px-4">
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
        </div>
    );
};

export default PresentationCard;
