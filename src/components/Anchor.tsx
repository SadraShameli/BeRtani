import { type AnchorHTMLAttributes } from 'react';

type IAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const Anchor: React.FC<IAnchorProps> = ({ children, ...rest }) => {
    return (
        <a className='group cursor-pointer' {...rest}>
            <span className='bg-gradient-to-r from-current to-current bg-[length:0%_2px] bg-left bg-no-repeat px-1 transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]'>
                {children}
            </span>
        </a>
    );
};

export default Anchor;
