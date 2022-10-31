import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function LanguageModal({ isOpen, closeModal }) {
  // let [isOpen, setIsOpen] = useState(true);

  const langauges = [
    {
      flag: () => {
        return (
          <svg
            width={21}
            height={14}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#fff" d="M0 4.375h21v5.25H0z" />
            <path fill="#227FBB" d="M0 9.625h21V14H0z" />
            <path fill="#E94B35" d="M0 0h21v4.375H0z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.964 8.152V4.374H7.037v3.778c0 1.739 1.558 3.162 3.463 3.162s3.464-1.423 3.464-3.162Z"
              fill="#fff"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.422 5.762H7.037V4.374h1.385v1.388Zm1.385 0H8.422V7.15H7.037v1.002c0 .13.008.26.025.386h1.36v1.388h-.785c.215.287.48.542.785.751v-.751h1.385v1.324a3.766 3.766 0 0 0 1.386 0V9.926h1.385v.751c.305-.21.57-.463.785-.751h-.785V8.538h1.36c.017-.127.026-.256.026-.386V7.15h-1.386V5.762h1.386V4.374h-1.386v1.388h-1.385V4.374H9.807v1.388Zm0 1.388V5.762h1.386V7.15H9.807Zm0 1.388v1.388h1.386V8.538h1.385V7.15h-1.385v1.388H9.807Zm0 0H8.422V7.15h1.385v1.388Z"
              fill="#E94B35"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m14.656 2.699-.618-.909-1.025.345-.72-.748-.947.494-.846-.63-.845.63-.948-.494-.72.748-1.025-.345-.618.91.692 1.674s1.188-.632 3.464-.632 3.463.632 3.463.632l.693-1.675Z"
              fill="#2C97DE"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m12.787 3.144 1.493.484-.134.322-1.429-.469.07-.337Z"
              fill="#E94B35"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m12.63 3.95.383-1.815-.72-.748-.947.494-.159 1.881a9.887 9.887 0 0 1 1.443.187ZM9.824 3.762l-.17-1.88-.947-.495-.72.748.45 1.8a9.963 9.963 0 0 1 1.387-.173Z"
              fill="#227FBB"
            />
            <ellipse cx="10.5" cy="3.09" rx="0.277" ry="0.278" fill="#F2C500" />
            <ellipse
              cx="10.084"
              cy="2.223"
              rx="0.277"
              ry="0.278"
              fill="#F2C500"
            />
            <ellipse
              cx="10.916"
              cy="2.223"
              rx="0.277"
              ry="0.278"
              fill="#F2C500"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.78 2.393c.026-.029.028-.023.043-.029a.147.147 0 0 1 .062-.022.233.233 0 0 1 .066-.002.102.102 0 0 1 .052.02l.046.03a.464.464 0 0 0 .048.03.172.172 0 0 0 .103.014c.01-.003.015.004.005.012-.077.056-.136.004-.186-.02a.402.402 0 0 1 .048.049.27.27 0 0 0 .078.07.162.162 0 0 0 .116.022c.006-.001.009 0 .009.004 0 .003 0 .008-.005.012a.095.095 0 0 1-.059.02.195.195 0 0 1-.118-.04c-.03-.02-.05-.046-.075-.069a.16.16 0 0 0-.067-.041.284.284 0 0 0-.107.005.519.519 0 0 0-.086-.043.28.28 0 0 1 .028-.022Z"
              fill="#E94B35"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.085 3.244a.054.054 0 0 0-.014.02l-.008.018a.067.067 0 0 1-.054.041l-.017.002a.035.035 0 0 1-.02-.066l.05-.025a.076.076 0 0 0 .03-.027l.011-.019a.08.08 0 0 0-.068-.122h-.021a.08.08 0 0 0-.033.007l-.045.02a.08.08 0 0 0-.042.044l-.07.178a.048.048 0 0 1-.026.027l-.007.003a.033.033 0 0 1-.035-.055l.02-.016a.052.052 0 0 0 .016-.028l.037-.173a.024.024 0 0 0-.045-.014l-.043.11a.081.081 0 0 1-.006.014l-.029.045a.033.033 0 1 1-.046-.046l.009-.005a.039.039 0 0 0 .016-.02l.042-.115a.08.08 0 0 0-.004-.063l-.02-.039a.08.08 0 0 1-.006-.051l.033-.16a.076.076 0 0 0-.007-.049l-.008-.016a.04.04 0 0 1 0-.035l.004-.008a.036.036 0 0 0-.04-.05.036.036 0 0 1-.036-.016l-.002-.003a.042.042 0 0 1 .003-.051l.048-.056a.054.054 0 0 0 .012-.023.055.055 0 0 1 .041-.04l.056-.012a.077.077 0 0 1 .043.003l.093.034a.04.04 0 0 1 .002.073l-.003.002a.026.026 0 0 1-.014.001.026.026 0 0 0-.029.035l.033.096a.08.08 0 0 0 .055.052l.435.119a.08.08 0 0 0 .037.001l.168-.032a.017.017 0 0 1 .01.033l-.026.01a.044.044 0 0 0-.024.029l-.003.01a.067.067 0 0 1-.032.04l-.014.008a.08.08 0 0 0-.042.067l-.004.077a.079.079 0 0 1-.005.024l-.042.115a.08.08 0 0 1-.024.033l-.149.127a.07.07 0 0 0-.02.028l-.013.033a.029.029 0 1 1-.05-.027l.014-.018a.043.043 0 0 0 .006-.01l.01-.029c.02-.053-.045-.098-.088-.06Z"
              fill="#F2C500"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.63 3.866c-.254.092-.54-.046-.667-.311a.596.596 0 0 0 .6.13.596.596 0 0 0 .377-.486c.074.285-.057.575-.31.667Z"
              fill="#fff"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m7.125 2.27.184.165.23-.081.01-.004-.002.011-.046.248.183.167.009.007-.011.004-.23.083-.047.248-.002.011-.009-.008-.183-.165-.23.081-.011.004.002-.011.046-.249-.183-.166-.008-.008.01-.003.23-.083.047-.248.003-.011.008.007ZM13.943 2.299l.02.246.225.098.01.004-.01.007-.203.15.021.247v.01l-.01-.004-.224-.096-.204.15-.009.006v-.011l-.022-.247-.224-.097-.01-.005.009-.007.203-.15-.02-.246-.001-.011.01.004.225.097.203-.15.01-.006v.01Z"
              fill="#F2C500"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.064 2.444 9.68 2.16l.031.347-1.562.276-.085-.338ZM8.23 3.109l1.511-.267.032.347-1.459.257-.084-.337Z"
              fill="#E94B35"
            />
          </svg>
        );
      },
      name: "Croatian",
    },
    {
      flag: () => {
        return (
          <svg
            width="21"
            height="14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#fff" d="M0 0h21v4.813H0z"></path>
            <path fill="#1AAF5D" d="M0 4.813h21v4.375H0z"></path>
            <path fill="#E94B35" d="M0 9.188h21v4.813H0z"></path>
          </svg>
        );
      },
      name: "Bulgarian",
    },
    {
      flag: () => {
        return (
          <svg
            width="21"
            height="14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 0v14h21V0H0Z"
              fill="#227FBB"
            ></path>
            <path
              d="M2.366 0 21 12.423V14h-2.366L0 1.577V0h2.366Z"
              fill="#fff"
            ></path>
            <path
              d="M2.366 14 21 1.577V0h-2.366L0 12.423V14h2.366Z"
              fill="#fff"
            ></path>
            <path
              d="M0 0v1.052L8.923 7H10.5L0 0ZM10.5 7V5.948L19.423 0H21L10.5 7ZM21 14v-1.052L12.077 7H10.5L21 14ZM0 14l10.5-7v1.052L1.577 14H0Z"
              fill="#E94B35"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.688 0H8.311v4.813H0v4.375h8.313V14h4.374V9.187H21V4.814h-8.313V0Z"
              fill="#fff"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.813 0H9.187v5.688H0v2.625h9.188V14h2.624V8.312H21V5.688h-9.188V0Z"
              fill="#E94B35"
            ></path>
          </svg>
        );
      },
      name: "English ",
    },
  ];
  return (
    <div>
      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                    <div class="flex items-center text-black px-6 py-4 border-b border-solid border-gray-200">
                      <span class=" font-medium text-lg tracking-tight w-[98%]">
                        Choose language
                      </span>
                      <a
                        onClick={() => {
                          closeModal();
                        }}
                        class="justify-items-end"
                      >
                        <svg
                          width="12"
                          height="12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="cursor-pointer"
                        >
                          <path
                            d="M.244.41a.833.833 0 0 1 1.179 0l4.41 4.412L10.244.41a.833.833 0 1 1 1.179 1.178L7.012 6l4.41 4.41a.833.833 0 0 1-1.178 1.18l-4.41-4.411-4.411 4.41a.833.833 0 1 1-1.179-1.178L4.654 6 .245 1.588a.833.833 0 0 1 0-1.178Z"
                            fill="#676767"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div className="my-4 mx-4">
                      {langauges.map((e, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center justify-between my-3 px-3 py-2 border border-gray-200 rounded-md"
                          >
                            <div className="flex items-center gap-4">
                              <e.flag />
                              <span>{e.name}</span>
                            </div>
                            <a className="bg-gray-200 h-7 w-7 rounded-full flex items-center justify-center">
                              <svg
                                width="8"
                                height="14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="text-center mx-auto"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M.646.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L6.293 7 .646 1.354a.5.5 0 0 1 0-.708Z"
                                  fill="#3F4246"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    </div>
  );
}
