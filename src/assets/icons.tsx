/* eslint-disable import/order */
import type { LucideIcon } from 'lucide-react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Camera,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Code,
  Copy,
  Dribbble,
  Facebook,
  HelpCircle,
  Instagram,
  Layers,
  Loader2,
  LogOut,
  Mail,
  MapPin,
  Menu,
  Pencil,
  Plus,
  PlusCircle,
  RefreshCw,
  Search,
  Smartphone,
  Sparkles,
  Twitter,
  Upload,
  User,
  X,
} from 'lucide-react';

import book1 from '@/assets/svg/book1.svg';
import book2 from '@/assets/svg/book2.svg';
import book3 from '@/assets/svg/book3.svg';
import checkCircle from '@/assets/svg/check-circle.svg';
import checkCircleXs from '@/assets/svg/check-circle-xs.svg';
import close from '@/assets/svg/close.svg';
import closeCircle from '@/assets/svg/close-circle.svg';
import coin from '@/assets/svg/coin.svg';
import creaditCard from '@/assets/svg/creadit-card.svg';
import discord from '@/assets/svg/discord.svg';
import dollar from '@/assets/svg/dollar.svg';
import dots from '@/assets/svg/dots.svg';
import down from '@/assets/svg/down.svg';
import edit from '@/assets/svg/edit.svg';
import exclamationMarkBold from '@/assets/svg/exclamation_mark_bold.svg';
import exclamationMark from '@/assets/svg/exclamation-mark.svg';
import expend1 from '@/assets/svg/expend-1.svg';
import expend2 from '@/assets/svg/expend-2.svg';
import eye from '@/assets/svg/eye.svg';
import eyeHidden from '@/assets/svg/eye-hidden.svg';
import facebookSvg from '@/assets/svg/facebook.svg';
import facebookCircle from '@/assets/svg/facebook_circle.svg';
import google from '@/assets/svg/google.svg';
import image from '@/assets/svg/image.svg';
import image1 from '@/assets/svg/image_1.svg';
import information from '@/assets/svg/information.svg';
import informationBold from '@/assets/svg/information_bold.svg';
import insecurity from '@/assets/svg/insecurity.svg';
import iPGE from '@/assets/svg/iPGE.svg';
import left from '@/assets/svg/left.svg';
import link from '@/assets/svg/link.svg';
import music from '@/assets/svg/music.svg';
import paper from '@/assets/svg/paper.svg';
import play from '@/assets/svg/play.svg';
import sound from '@/assets/svg/sound.svg';
import up from '@/assets/svg/up.svg';
import wallet from '@/assets/svg/wallet.svg';
import x from '@/assets/svg/X.svg';
import xBold from '@/assets/svg/x_bold.svg';

export type Icon = LucideIcon;

const IconList = {
  arrowDown: ArrowDown,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  calendar: Calendar,
  camera: Camera,
  check: Check,
  checkCircle,
  checkCircleXs,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronUp: ChevronUp,
  close,
  closeCircle,
  code: Code,
  coin,
  copy: Copy,
  creaditCard,
  discord,
  dollar,
  dots,
  doubleClick: Camera,
  dribbble: Dribbble,
  edit,
  exclamationMark,
  exclamationMarkBold,
  expend1,
  expend2,
  eye,
  eyeHidden,
  facebook: Facebook,
  facebookSvg,
  facebookCircle,
  google,
  helpCircle: HelpCircle,
  image,
  image1,
  information,
  informationBold,
  insecurity,
  instagram: Instagram,
  iPGE,
  layers: Layers,
  left,
  link,
  location: MapPin,
  message: Mail,
  menu: Menu,
  book1,
  book2,
  book3,
  down,
  music,
  paper,
  pencil: Pencil,
  play,
  plus: Plus,
  plusCircle: PlusCircle,
  reload: RefreshCw,
  search: Search,
  smartphone: Smartphone,
  sound,
  sparkles: Sparkles,
  spinner: Loader2,
  twitter: Twitter,
  up,
  upload: Upload,
  user: User,
  wallet,
  x,
  X,
  xBold,
  logout: LogOut,
};

export const Icons = IconList as Record<keyof typeof IconList, any>;
