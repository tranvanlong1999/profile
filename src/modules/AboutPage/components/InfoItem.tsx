import { VStack } from '@/components/ui/Utilities';

interface InfoItemProps {
  date: string;
  title: string;
  subtitle: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ date, title, subtitle }) => {
  return (
    <VStack spacing={4}>
      <span className="text-zinc-500 text-[13px] font-medium">{date}</span>
      <h3 className="text-[#BCBCBC] text-[17px] md:text-[18px] font-bold leading-tight">{title}</h3>
      <span className="text-zinc-500 text-[13px]">{subtitle}</span>
    </VStack>
  );
};

export default InfoItem;
