import React from 'react';

export default function Filters() {
    return (
        <aside className="w-full md:w-64 border p-4">
            <h3 className="text-xl font-semibold mb-4">FILTERS</h3>

            <div className="mb-6">
                <h4 className="font-medium mb-2">CATEGORIES</h4>
                <div className="flex flex-col gap-1">
                    <label><input type="checkbox" className="mr-2" />Men</label>
                    <label><input type="checkbox" className="mr-2" />Women</label>
                    <label><input type="checkbox" className="mr-2" />Kids</label>
                </div>
            </div>

            <div>
                <h4 className="font-medium mb-2">TYPE</h4>
                <div className="flex flex-col gap-1">
                    <label><input type="checkbox" className="mr-2" />Topwear</label>
                    <label><input type="checkbox" className="mr-2" />Bottomwear</label>
                    <label><input type="checkbox" className="mr-2" />Winterwear</label>
                </div>
            </div>
        </aside>
    );
}
