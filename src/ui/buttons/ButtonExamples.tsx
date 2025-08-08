'use client';

import { Plus, Download, Heart, Settings, Trash2, Check } from 'lucide-react';
import Button from './Button';
import IconButton from './IconButton';
import LoadingButton from './LoadingButton';
import FloatingActionButton from './FloatingActionButton';
import ButtonGroup from './ButtonGroup';

/**
 * Button Usage Examples
 * This file demonstrates how to use all button components
 * Remove this file in production - it's for reference only
 */
export default function ButtonExamples() {
  return (
    <div className="p-8 space-y-8 max-w-4xl mx-auto">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Button Templates</h2>
        
        {/* Basic Button Variants */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Basic Variants</h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
          </div>
        </section>

        {/* Button Sizes */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Sizes</h3>
          <div className="flex items-end gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
        </section>

        {/* Buttons with Icons */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">With Icons</h3>
          <div className="flex flex-wrap gap-3">
            <Button icon={<Plus />}>Create New</Button>
            <Button icon={<Download />} iconPosition="right">Download</Button>
            <Button variant="secondary" icon={<Heart />}>Like</Button>
            <Button variant="secondary" icon={<Settings />} iconPosition="right">Settings</Button>
          </div>
        </section>

        {/* Loading States */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Loading States</h3>
          <div className="flex flex-wrap gap-3">
            <Button loading>Loading...</Button>
            <LoadingButton loading loadingText="Saving...">Save</LoadingButton>
            <LoadingButton loading variant="secondary">Processing</LoadingButton>
          </div>
        </section>

        {/* Icon Buttons */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Icon Buttons</h3>
          <div className="flex gap-3">
            <IconButton icon={<Plus />} aria-label="Add item" />
            <IconButton icon={<Heart />} variant="secondary" aria-label="Like" />
            <IconButton icon={<Settings />} variant="secondary" aria-label="Settings" />
            <IconButton icon={<Trash2 />} variant="primary" aria-label="Delete" />
          </div>
        </section>

        {/* Button Groups */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Button Groups</h3>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Horizontal Group (Attached)</p>
              <ButtonGroup>
                <Button variant="secondary">Left</Button>
                <Button variant="secondary">Center</Button>
                <Button variant="secondary">Right</Button>
              </ButtonGroup>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Horizontal Group (Separated)</p>
              <ButtonGroup attached={false}>
                <Button>Button 1</Button>
                <Button variant="secondary">Button 2</Button>
                <Button variant="secondary">Button 3</Button>
              </ButtonGroup>
            </div>

            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Vertical Group</p>
              <ButtonGroup orientation="vertical">
                <Button variant="secondary">Top</Button>
                <Button variant="secondary">Middle</Button>
                <Button variant="secondary">Bottom</Button>
              </ButtonGroup>
            </div>
          </div>
        </section>

        {/* Full Width Button */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Full Width</h3>
          <Button fullWidth icon={<Check />}>Full Width Button</Button>
        </section>

        {/* Custom Styling with className */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Custom Styling Examples</h3>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">Custom Blue</Button>
            <Button variant="secondary" className="border-2 border-green-500 text-green-500">Custom Border</Button>
            <Button className="rounded-full px-8">Rounded Full</Button>
            <Button variant="secondary" className="shadow-2xl transform hover:scale-105">Custom Shadow</Button>
          </div>
        </section>

        {/* Disabled States */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Disabled States</h3>
          <div className="flex flex-wrap gap-3">
            <Button disabled>Disabled Primary</Button>
            <Button variant="secondary" disabled>Disabled Secondary</Button>
            <IconButton icon={<Settings />} disabled aria-label="Disabled settings" />
          </div>
        </section>
      </div>

      {/* Floating Action Button */}
      <FloatingActionButton 
        icon={<Plus />}
        aria-label="Add new item"
        position="bottom-right"
      />
      
      <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h4 className="font-semibold mb-2">Usage Notes:</h4>
        <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
          <li>• All buttons support dark mode automatically</li>
          <li>• RTL language support is built-in</li>
          <li>• Loading states disable the button automatically</li>
          <li>• Icon buttons require aria-label for accessibility</li>
          <li>• Use the ButtonGroup for related actions</li>
          <li>• FloatingActionButton is positioned absolutely</li>
        </ul>
      </div>
    </div>
  );
}