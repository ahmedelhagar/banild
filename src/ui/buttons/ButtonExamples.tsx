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
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="destructive">Destructive Button</Button>
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
            <Button variant="outline" icon={<Heart />}>Like</Button>
            <Button variant="ghost" icon={<Settings />} iconPosition="right">Settings</Button>
          </div>
        </section>

        {/* Loading States */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Loading States</h3>
          <div className="flex flex-wrap gap-3">
            <Button loading>Loading...</Button>
            <LoadingButton loading loadingText="Saving...">Save</LoadingButton>
            <LoadingButton loading variant="outline">Processing</LoadingButton>
          </div>
        </section>

        {/* Icon Buttons */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Icon Buttons</h3>
          <div className="flex gap-3">
            <IconButton icon={<Plus />} aria-label="Add item" />
            <IconButton icon={<Heart />} variant="outline" aria-label="Like" />
            <IconButton icon={<Settings />} variant="ghost" aria-label="Settings" />
            <IconButton icon={<Trash2 />} variant="destructive" aria-label="Delete" />
          </div>
        </section>

        {/* Button Groups */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Button Groups</h3>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Horizontal Group (Attached)</p>
              <ButtonGroup>
                <Button variant="outline">Left</Button>
                <Button variant="outline">Center</Button>
                <Button variant="outline">Right</Button>
              </ButtonGroup>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Horizontal Group (Separated)</p>
              <ButtonGroup attached={false}>
                <Button>Button 1</Button>
                <Button variant="outline">Button 2</Button>
                <Button variant="ghost">Button 3</Button>
              </ButtonGroup>
            </div>

            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Vertical Group</p>
              <ButtonGroup orientation="vertical">
                <Button variant="outline">Top</Button>
                <Button variant="outline">Middle</Button>
                <Button variant="outline">Bottom</Button>
              </ButtonGroup>
            </div>
          </div>
        </section>

        {/* Full Width Button */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Full Width</h3>
          <Button fullWidth icon={<Check />}>Full Width Button</Button>
        </section>

        {/* Disabled States */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Disabled States</h3>
          <div className="flex flex-wrap gap-3">
            <Button disabled>Disabled Primary</Button>
            <Button variant="outline" disabled>Disabled Outline</Button>
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