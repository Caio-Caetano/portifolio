import React from 'react';
import { Bucketlist, BucketlistCategory } from '../types/bucketlist';
import * as Icons from 'lucide-react';
import { LucideProps } from 'lucide-react';

const BucketlistComponent = ({ data }: { data: Bucketlist }) => {
  return (
    <div>
      {Object.entries(data).map(([key, value]) => {
        // Assert that value is a BucketlistCategory
        const category = value as BucketlistCategory;

        // Dynamically import the icon
        const Icon = Icons[category.icon as keyof typeof Icons] as React.ForwardRefExoticComponent<
          Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
        >;

        return (
          <div key={key} className="mb-6">
            {/* Render the category title */}
            <h2 className="text-xl font-bold flex items-center gap-2">
              {Icon && <Icon size={20} />}
              <span>{key}</span>
            </h2>

            {/* Render the list of items */}
            <ul className="mt-2 pl-4 list-disc text-black select-none cursor-default">
              {category.itens.map((item, index) => (
                <li key={index} className={item.done ? '' : 'text-blue'}>
                  <span className={item.done ? 'line-through' : 'text-blue'}>
                    {item.item}
                  </span>
                  {item.done && item.date && (
                    <span className="ml-2 text-black">({item.date})</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default BucketlistComponent;
