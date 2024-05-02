import { useState } from 'react';
import Image from 'next/image';
import { IoEyeOffOutline, IoChevronDown } from 'react-icons/io5';

import { PortfolioItem } from '@/src/types';
import { portfolioCategories, portfolioData } from '@/src/data';

export default function Portfolio() {
  const [portfolioItems, setPortfolioItems] =
    useState<PortfolioItem[]>(portfolioData);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filterPortfolioItems = (categoryId: string) => {
    let filteredData;
    if (categoryId === 'all') {
      filteredData = portfolioData;
    } else {
      filteredData = portfolioData.filter(
        (item) => item.categoryId === categoryId
      );
    }
    setPortfolioItems(filteredData);
    setActiveCategory(categoryId);
  };

  return (
    <article className='portfolio active' data-page='portfolio'>
      <header>
        <h2 className='h2 article-title'>Portfolio</h2>
      </header>

      <section className='projects'>
        <ul className='filter-list'>
          {portfolioCategories.map((item) => (
            <li className='filter-item' key={item.categoryId}>
              <button
                className={item.categoryId === activeCategory ? 'active' : ''}
                onClick={() => filterPortfolioItems(item.categoryId)}
              >
                {item.category}
              </button>
            </li>
          ))}
        </ul>

        <div className='filter-select-box'>
          <button className='filter-select' data-select>
            <div className='select-value' data-selecct-value>
              Select category
            </div>

            <div className='select-icon'>
              <IoChevronDown />
            </div>
          </button>

          <ul className='select-list'>
            {portfolioCategories.map((item) => (
              <li className='select-item' key={item.categoryId}>
                <button
                  data-select-item
                  onClick={() => filterPortfolioItems(item.categoryId)}
                >
                  {item.category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className='project-list'>
          {portfolioItems.map((item, key) => (
            <li className='project-item active' key={key}>
              <a href='#'>
                <figure className='project-img'>
                  <div className='project-item-icon-box'>
                    <IoEyeOffOutline />
                  </div>

                  <Image
                    src={item.imageId}
                    alt={item.title}
                    height={200}
                    width={200}
                    priority
                  />
                </figure>

                <h3 className='project-title'>{item.title}</h3>

                <p className='project-category'>{item.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
