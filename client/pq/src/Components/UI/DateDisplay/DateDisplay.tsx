import { memo, useMemo } from 'react';
import './DateDisplay.scss';

interface DateDisplayProps {
  date: string;
}

const DateDisplay: React.FC<DateDisplayProps> = ({ date }) => {
    
    const formattedDate = (() => {
        const dateObj = new Date(date);
        const day = String(dateObj.getDate()).padStart(2, '0');
        const year = dateObj.getFullYear();
        const months = [ 'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря' ];
        const monthName = months[dateObj.getMonth()];
        return `${day} / ${monthName} / ${year}`;
      })();
      
      const shortDate = (() => {
        const dateObj = new Date(date);
        const day = String(dateObj.getDate()).padStart(2, '0');
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        return `${day}/${month}`;
      })();
      

  return (
    <div className="order-item__date">
      <p>{shortDate}</p>
      <p>{formattedDate}</p>
    </div>
  );
};

export default memo(DateDisplay);
