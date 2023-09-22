import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faBlogger, faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '박종권(Jongkwon Park)',
    small: '',
  },
  contact: [
    {
      title: 'jongkwong@naver.com',
      link: 'mailto:wnjoon@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Github',
      link: 'https://github.com/jongkwon5',
      icon: faGithub,
    },
    {
      title: '010-9621-0310',
      icon: faPhone,
    },
    {
      title: '1994-03-10',
      icon: faBlogger,
    },
    // {
    //   title: 'YouTube',
    //   link: 'https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww',
    //   // icon: faRss,
    //   icon: faYoutube,
    // },
  ],
  notice: {
    title: 'asasandd',
    // title: 'Status : Open to new opportunities and challenges 🙋‍♂️',
    // title: 'Status : 작성중입니다 🔧',
    icon: faBell,
  },
};

export default profile;
