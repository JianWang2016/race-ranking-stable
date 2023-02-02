import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export function EntrySuccess() {
  return (
    <div className="rounded-md bg-blue-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="h-5 w-5 text-blue-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className="text-sm text-blue-700">
            Congratulation! You have successfully uploaded your race
            information!
          </p>
          <p className="mt-3 text-sm md:mt-0 md:ml-6">
            <Link
              href="/"
              className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"
            >
              Now go to check out your ranking!
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
