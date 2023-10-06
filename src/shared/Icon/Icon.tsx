import EyeIcon from './icons/eye.svg?react';
interface IconProps {
    name: IconName;
    onClick: () => void;
    className?: string;
}

export const Icon = ({ name, ...rest }: IconProps) => {
    const Component = ICON_TYPE_MAP[name];

    return <Component {...rest} />;
};

export type IconName = keyof typeof ICON_TYPE_MAP;

export const ICON_TYPE_MAP = {
    ShowEye: EyeIcon
} as const;
