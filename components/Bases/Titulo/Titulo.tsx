// Titulo.tsx

import React from 'react';


const fontWeights = {
    black: 900,
    extraBold: 800,
    bold: 700,
    semiBold: 600,
    regular: 400,
    light: 300,
};

const fontSizes = {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
    xxxxl: 40,
    xxxxxl: 48,
    xxxxxxl: 56,
    xxxxxxxl: 64,
    xxxxxxxxl: 72,
    xxxxxxxxxl: 80,
    xxxxxxxxxxl: 96,
    xxxxxxxxxxxl: 128,
};

const createTypographyStyle = (weightKey: string, sizeKey: string) => ({
    fontFamily: 'League Spartan',
    fontWeight: fontWeights[weightKey],
    fontSize: fontSizes[sizeKey],
    lineHeight: 150.0,
    textDecoration: 'none',
    letterSpacing: 'normal',
});

// Generate all style variants
const tipografiaTitulos = {};

for (const weightKey in fontWeights) {
    for (const sizeKey in fontSizes) {
        tipografiaTitulos[`${weightKey}${sizeKey}`] = createTypographyStyle(weightKey, sizeKey);
    }
}

// Titulo component
interface TituloProps {
    level?: 1 | 2 | 3 | 4 | 5;
    children: React.ReactNode;
    fontWeight?: keyof typeof fontWeights;
    fontSize?: keyof typeof fontSizes;
}

const levelTags = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
};

const Titulo: React.FC<TituloProps> = ({ level = 1, children, fontWeight, fontSize }) => {
    const Tag = levelTags[level] || 'h1';
    const style = tipografiaTitulos[`${fontWeight}${fontSize}`]; // Use the generated style
    return <Tag style={style}>{children}</Tag>;
};

export default Titulo;
