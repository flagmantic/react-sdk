import { useCallback, useEffect, useState } from "react";
import {
  fetchFlag,
  FetchFlagArgs,
  fetchFlags,
  FetchFlagsArgs,
} from "@firstkind/sdk";

export const useFetchFlag = <T>({
  apiKey,
  environmentKey,
  flagKey,
  projectKey,
  cacheDuration,
  defaultValue,
  useCache,
  userId,
}: FetchFlagArgs<T>) => {
  const [isLoading, setIsLoading] = useState(true);
  const [payload, setResult] = useState<T | undefined>(undefined);

  const refetch = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await fetchFlag({
        apiKey,
        environmentKey,
        flagKey,
        projectKey,
        cacheDuration,
        defaultValue,
        useCache,
        userId,
      });
      setResult(result);
    } finally {
      setIsLoading(false);
    }
  }, [
    apiKey,
    cacheDuration,
    defaultValue,
    environmentKey,
    flagKey,
    projectKey,
    useCache,
    userId,
  ]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return {
    isLoading,
    result: payload,
    refetch,
  };
};

export const useFetchFlags = <T>({
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
  const [isLoading, setIsLoading] = useState(true);
  const [payload, setResult] = useState<{ [key: string]: any } | undefined>(
    undefined
  );

  const refetch = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await fetchFlags({
        apiKey,
        environmentKey,
        flagKeys,
        projectKey,
        cacheDuration,
        defaultValue,
        useCache,
        userId,
        resolveRemotely,
      });
      setResult(result);
    } finally {
      setIsLoading(false);
    }
  }, [
    apiKey,
    cacheDuration,
    defaultValue,
    environmentKey,
    flagKeys,
    projectKey,
    resolveRemotely,
    useCache,
    userId,
  ]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return {
    isLoading,
    result: payload,
    refetch,
  };
};
