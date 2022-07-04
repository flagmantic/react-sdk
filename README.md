# Flagmantic React SDK

This SDK facilitates using the client APIs provided by [Flagmantic](https://flagmantic.com)

# Install

```sh
npm i @firstkind/react
```

# Usage

```typescript
import { useFetchFlag } from "@firstkind/react";
import React from "react";

const LoadPage: React.FC = () => {
  const { isLoading, result } = await useFetchFlag({
    apiKey: "pk_FpACzwidBsbDiaqPloKnCfESozthonuuLbGYSLvb",
    userId: "u-1234",
    projectKey: "example-app",
    environmentKey: "development",
    flagKey: "show-new-loading-screen",
    defaultValue: false,
  });

  if (isLoading) {
    return <div>Loading</div>;
  }
  return result ? <div>new menu</div> : <div>old menu</div>;
};
```

# Types

This library comes with typescript types.

```typescript
import { FetchFlagArgs, FetchFlagsArgs } from "@firstkind/sdk";
export declare const useFetchFlag: <T>({
  apiKey,
  environmentKey,
  flagKey,
  projectKey,
  cacheDuration,
  defaultValue,
  useCache,
  userId,
}: FetchFlagArgs<T>) => {
  isLoading: boolean;
  result: T | undefined;
  refetch: () => Promise<void>;
};
export declare const useFetchFlags: <T>({
  apiKey,
  environmentKey,
  flagKeys,
  projectKey,
  cacheDuration,
  defaultValue,
  useCache,
  userId,
  resolveRemotely,
}: FetchFlagsArgs<T>) => {
  isLoading: boolean;
  result:
    | {
        [key: string]: any;
      }
    | undefined;
  refetch: () => Promise<void>;
};
```
