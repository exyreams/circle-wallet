import { W3SSdk } from "@circle-fin/w3s-pw-web-sdk";
import React, { useCallback, useEffect, useState } from "react";

import { Button } from "@/components";

let sdk;

const Createaccount = () => {
  useEffect(() => {
    sdk = new W3SSdk();
  }, []);

  const [appId, setAppId] = useState("");
  const [userToken, setUserToken] = useState("");
  const [encryptionKey, setEncryptionKey] = useState("");
  const [challengeId, setChallengeId] = useState("");

  const onAppIdChange = useCallback((e) => {
    setAppId(e.target.value);
  }, []);
  const onUserTokenChange = useCallback((e) => {
    setUserToken(e.target.value);
  }, []);
  const onEncryptionKeyChange = useCallback((e) => {
    setEncryptionKey(e.target.value);
  }, []);
  const onChallengeIdChange = useCallback((e) => {
    setChallengeId(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    sdk.setAppSettings({
      appId,
    });
    sdk.setAuthentication({
      userToken,
      encryptionKey,
    });

    // If you want to customize the UI, you can uncomment & use the following code.
    // sdk.setLocalizations({
    //   common: {
    //     continue: 'Next',
    //   },
    //   securityIntros: {
    //     headline:
    //       'Set up your {{method}} to recover your pin code if you forget it',
    //     headline2: 'Security Question',
    //   },
    // })

    // sdk.setThemeColor({
    //   backdrop: '#fcba03',
    //   backdropOpacity: 0.8,
    //   textMain: '#2403fc'
    // })

    // sdk.setResources({
    //   naviClose:
    //     'https://static.vecteezy.com/system/resources/previews/018/887/462/non_2x/signs-close-icon-png.png',
    //   securityIntroMain:
    //     'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/rockcms/2022-01/210602-doge-meme-nft-mb-1715-8afb7e.jpg',
    //   fontFamily: {
    //     name: 'Edu TAS Beginner',
    //     url: 'https://fonts.googleapis.com/css2?family=Edu+TAS+Beginner:wght@400;500;600;700&display=swap',
    //   },
    // })

    // sdk.setCustomSecurityQuestions(
    //   [
    //     {
    //       question: 'What is your favorite color?',
    //       type: 'TEXT',
    //     },
    //     {
    //       question: 'What is your favorite food?',
    //       type: 'TEXT',
    //     },
    //     {
    //       question: 'When is your birthday?',
    //       type: 'DATE',
    //     },
    //   ],
    //   1
    // )

    sdk.execute(challengeId, (error, result) => {
      if (error) {
        console.log(
          `${error?.code?.toString() || "Unknown code"}: ${
            error?.message ?? "Error!"
          }`
        );

        return;
      }

      console.log(`Challenge: ${result.type}`);
      console.log(`status: ${result.status}`);

      if (result.data) {
        console.log(`signature: ${result.data?.signature}`);
      }
    });
  }, [appId, challengeId, encryptionKey, userToken]);

  return (
    <div>
      <div className="p-10">
        Advanced Mode
        <br />
        <br />
        <div className="row">
          <div className="label">App Id</div>

          <input
            placeholder="Enter your AppID"
            class="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
            type="text"
            onChange={onAppIdChange}
            value={appId}
          />
        </div>
        <div className="row">
          <div className="label">User Token</div>
          <input
            placeholder="Enter User Token"
            class="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
            type="text"
            onChange={onUserTokenChange}
            value={userToken}
          />
        </div>
        <div className="row">
          <div className="label">Encryption Key</div>
          <input
            placeholder="Enter Encryption Key"
            class="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
            type="text"
            onChange={onEncryptionKeyChange}
            value={encryptionKey}
          />
        </div>
        <div className="row">
          <label className="label">Challenge Id</label>
          <br />
          <input
            placeholder="Enter Challenge Id"
            class="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
            type="text"
            onChange={onChallengeIdChange}
            value={challengeId}
          />
        </div>
        <br />
        <Button name="Verify Challenge" />
      </div>
    </div>
  );
};

export default Createaccount;
