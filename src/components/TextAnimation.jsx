import { TypeAnimation } from 'react-type-animation';

const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        'I am a DDITian',
        1000, 
        'I am a Frontend Developer',
        1000,
        'I am a Coder',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

const WelcomeAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        '',
        1000,
        'નમસ્તે',
        1000, 
        'नमस्ते',
        1000,
        'Welcome',
        1000
      ]}
      wrapper="span"
      speed={20}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export {TextAnimation, WelcomeAnimation};