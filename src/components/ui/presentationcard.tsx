import React, { useState } from 'react';
import { twMerge } from "tailwind-merge";

import styles from '../../assets/styles/components/presentationcard.module.css';

import FrozenmanHead from '../../assets/image/skins/frozenman_head.png?url';
import MorticzekHead from '../../assets/image/skins/morticzek_head.png?url';
import MivosVanosHead from '../../assets/image/skins/mivosvanos_head.png?url';
import QxertyHead from '../../assets/image/skins/qxerty_head.png?url';
import JustWhenHead from '../../assets/image/skins/justwhen_head.png?url';

import Frozenman from '../../assets/image/skins/frozenman.png?url';
import Morticzek from '../../assets/image/skins/morticzek.png?url';
import MivosVanos from '../../assets/image/skins/mivosvanos.png?url';
import Qxerty from '../../assets/image/skins/qxerty.png?url';
import JustWhen from '../../assets/image/skins/justwhen.png?url';

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
    frozenman: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id porttitor metus, sed egestas ex. In hac habitasse platea dictumst. Maecenas quis nisi nibh. Fusce sagittis urna quis nibh lacinia, a sollicitudin sapien sagittis. Phasellus porttitor, tellus ac dignissim elementum, risus ex auctor dui, id commodo risus mi vitae metus. Donec blandit quam a purus faucibus condimentum.',
    morticzek: 'Description for Morticzek.',
    mivosvanos: 'Description for MivosVanos.',
    qxerty: 'Description for Qxerty.',
    justwhen: 'Description for JustWhen.',
};

const images: { [key: string]: string } = {
    frozenman: Frozenman,
    morticzek: Morticzek,
    mivosvanos: MivosVanos,
    qxerty: Qxerty,
    justwhen: JustWhen,
};

const PresentationCard = () => {
    // Define state variables
    const [selectedName, setSelectedName] = useState(names.frozenman);
    const [selectedDescription, setSelectedDescription] = useState(descriptions.frozenman);
    const [selectedImage, setSelectedImage] = useState(images.frozenman);

    // Event handler for button click
    const handleButtonClick = (name: string) => {
        setSelectedName(names[name]);
        setSelectedDescription(descriptions[name]);
        setSelectedImage(images[name]);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-center bg-neutral-800 w-fit mx-auto m-4 text-color px-8 py-4 rounded-xl shadow-lg">
                {Object.keys(heads).map((name, index) => (
                    <div key={index} className="flex justify-center items-center mx-2">
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
            <div className="flex justify-center items-center w-full lg:w-2/3 container mx-auto bg-neutral-800 rounded-xl shadow-lg divide-x-4">
                <div className="w-1/2 text-left divide-y-2 pr-4 p-6">
                    <h2 className={twMerge(styles.h2, 'mb-4')}>{selectedName}</h2>
                    <p className={twMerge(styles.p, 'pt-4')}>{selectedDescription}</p>
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
